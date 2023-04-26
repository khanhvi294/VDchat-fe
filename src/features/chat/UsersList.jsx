import { Avatar, Divider, List, Skeleton } from "antd";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getConversations } from "../../api/conversationApi";

const PAGE_SIZE = 2;

const UsersList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  // console.log("data sample", data.length);

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
    queryFn: ({ pageParam = 4 }) => {
      // console.log("bfg,bfg ", pageParam);
      return getConversations({ page: pageParam, limit: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, pages) => {
      // console.log("fbf", lastPage.last, pages);
      return lastPage.nextCursor;
    },
  });

  // console.log("data conversation ", hasNextPage, dataConversations);
  return (
    <div
      id="scrollableDiv"
      // className="flex-1"
      style={{
        overflow: "auto",
        padding: "0 12px",
        // height: "40px",
      }}
    >
      <InfiniteScroll
        dataLength={50}
        hasMore={false}
        next={fetchNextPage}
        // dataLength={data.length}
        // next={loadMoreData}
        // hasMore={data.length < 50}
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
        {dataConversations && (
          <List
            position="left"
            dataSource={dataConversations.pages[0].content}
            renderItem={(item) => (
              <div>{item?.name}</div>
              // <List.Item
              //   key={item.email}
              //   className="!border-b-0 px-2 rounded-lg  hover:bg-slate-200 hover:cursor-pointer"
              //   onClick={() => console.log("object", item)}
              // >
              //   <List.Item.Meta
              //     avatar={<Avatar size="large" src={item.picture.large} />}
              //     title={item.name.last}
              //     description={item.email}
              //     className="pl-5 font-medium"
              //   />
              // </List.Item>
            )}
          />
        )}
      </InfiniteScroll>
    </div>
  );
};
export default UsersList;
