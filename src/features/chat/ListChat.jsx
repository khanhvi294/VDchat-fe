import { Avatar, Divider, List, Skeleton } from "antd";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const ListChat = () => {
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
  return (
    <div
      id="scrollableDiv"
      className="flex-1"
      style={{
        overflow: "auto",
        padding: "0 12px",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
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
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              key={item.email}
              className="!border-b-0 px-2 rounded-lg  hover:bg-slate-200 hover:cursor-pointer"
              onClick={() => console.log("object", item)}
            >
              <List.Item.Meta
                avatar={<Avatar size="large" src={item.picture.large} />}
                title={item.name.last}
                description={item.email}
                className="pl-5 font-medium"
              />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default ListChat;
