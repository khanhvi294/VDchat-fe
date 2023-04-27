import { useInfiniteQuery } from "@tanstack/react-query";
import { Avatar, Button, Divider, List, Skeleton, Typography } from "antd";

const { Text } = Typography;
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getConversations } from "../../api/conversationApi";
import formatDistance from "date-fns/formatDistance";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { formatRelative } from "date-fns";
import formatDistanceStrict from "date-fns/formatDistanceStrict";

const PAGE_SIZE = 5;

const UsersList = () => {
  const [dataLoad, setDataLoad] = useState([]);
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
      setDataLoad([
        ...dataLoad,
        ...dataConversations?.pages[dataConversations?.pages?.length - 1]
          .content,
      ]);
    }
  }, [dataConversations]);
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
        dataLength={dataConversations?.pages[0]?.total - 1}
        next={fetchNextPage}
        hasMore={dataLoad.length < dataConversations?.pages[0]?.total}
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
            <List.Item
              key={item?.name}
              className="!border-b-0 !px-2 rounded-lg  hover:bg-slate-200 hover:cursor-pointer"
              onClick={() => console.log("object", item)}
            >
              <List.Item.Meta
                avatar={<Avatar size="large" src="" />}
                title={item?.name}
                description={<Text ellipsis>{item?.lastMessage?.content}</Text>}
                className="font-medium"
              />

              <div>
                {formatDistanceStrict(
                  new Date(item?.lastMessage?.createdAt),
                  new Date()
                )}
                {/* {formatDistanceToNow(new Date(item?.lastMessage?.createdAt), {
                  addSuffix: true,
                })} */}
              </div>
            </List.Item>
          )}
        />
        {/* )} */}
      </InfiniteScroll>
    </div>
  );
};
export default UsersList;
