import { useMutation, useQuery } from "@tanstack/react-query";
import { Avatar, Divider, List } from "antd";
import { findUsersAndConversations } from "../../api/userApi";
import { useEffect, useState } from "react";

const ListContact = ({ searchValue }) => {
  console.log(!!searchValue);
  const [dataFind, setDataFind] = useState();

  useQuery({
    queryKey: ["searchUser", searchValue],
    enabled: !!searchValue,
    queryFn: () => findUsersAndConversations(searchValue),
    onSuccess: (data) => {
      setDataFind(data);
    },
  });
  return (
    <>
      {dataFind && (
        <>
          {dataFind.usersWithConversation.length > 0 && (
            <>
              <Divider orientation="left">Friends</Divider>
              <List
                className="p-6"
                itemLayout="horizontal"
                dataSource={dataFind.usersWithConversation}
                renderItem={(item, index) => (
                  <List.Item className="!justify-start !border-b-0 hover:bg-slate-200 rounded-lg !px-1">
                    <Avatar size="large" className="mr-2" src={item.avatar} />
                    <p className=" text-black font-medium">{item.username}</p>
                  </List.Item>
                )}
              />
            </>
          )}

          {dataFind.conversations.length > 0 && (
            <>
              <Divider orientation="left">Groups</Divider>
              <List
                className="p-6"
                itemLayout="horizontal"
                dataSource={dataFind.conversations}
                renderItem={(item, index) => (
                  <List.Item className="!justify-start !border-b-0 hover:bg-slate-200 rounded-lg !px-1">
                    <Avatar size="large" className="mr-2" />
                    <p className=" text-black font-medium">{item.name}</p>
                  </List.Item>
                )}
              />
            </>
          )}
          {dataFind.usersWithoutConversation.length > 0 && (
            <>
              <Divider orientation="left">Others</Divider>
              <List
                className="p-6"
                itemLayout="horizontal"
                dataSource={dataFind.usersWithoutConversation}
                renderItem={(item, index) => (
                  <List.Item className="!justify-start !border-b-0 hover:bg-slate-200 rounded-lg !px-1">
                    <Avatar size="large" className="mr-2" src={item.avatar} />
                    <p className=" text-black font-medium">{item.username}</p>
                  </List.Item>
                )}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default ListContact;
