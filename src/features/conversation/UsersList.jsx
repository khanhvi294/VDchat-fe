import { useInfiniteQuery } from "@tanstack/react-query";
import { Avatar, Divider, List, Skeleton, Typography } from "antd";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getConversations } from "../../api/conversationApi";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const { Text } = Typography;

const PAGE_SIZE = 9;

const UsersList = () => {
  const [dataLoad, setDataLoad] = useState([]);
  const { conversationId } = useParams();
  const socket = useSelector((state) => state.socket.data);

  const {
    data: dataConversations,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["conversations"],
    queryFn: ({ pageParam }) => {
      return getConversations({ page: pageParam, limit: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasNextPage) {
        return +lastPage.nextPage;
      }
      return undefined;
    },
  });
  useEffect(() => {
    if (dataConversations?.pages?.length) {
      const result = dataConversations?.pages.reduce(
        (acc, page) => acc.concat(page.content),
        []
      );
      setDataLoad(result);
    }
  }, [dataConversations]);

  useEffect(() => {
    socket.on("message-received", (data) => {
      console.log("received message", data);
    });
  }, []);

  return (
    <div
      id="scrollableDiv"
      // className="flex-1"
      style={{
        overflow: "auto",
        padding: "0 12px",
      }}
    >
      <InfiniteScroll
        dataLength={
          dataConversations?.pages[0]?.total
            ? dataConversations?.pages[0]?.total
            : 0
        }
        next={fetchNextPage}
        hasMore={dataLoad?.length < dataConversations?.pages[0]?.total}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          position="left"
          dataSource={dataLoad}
          renderItem={(item) => (
            <Link to={`/${item._id}`}>
              <List.Item
                key={item?.name}
                className={`!border-b-0 !px-2 my-1 rounded-lg hover:bg-slate-200 hover:cursor-pointer ${
                  conversationId === item._id ? `bg-[#e6ebf5]` : ``
                }`}
              >
                <List.Item.Meta
                  avatar={<Avatar size="large" src="" />}
                  title={item?.name}
                  description={
                    <Text ellipsis>{item?.lastMessage?.content}</Text>
                  }
                  className="font-medium"
                />

                <div>
                  {formatDistanceStrict(
                    new Date(item?.lastMessage?.createdAt),
                    new Date()
                  )}
                </div>
              </List.Item>
            </Link>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default UsersList;
