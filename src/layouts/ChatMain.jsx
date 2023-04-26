import {
  CloseCircleOutlined,
  DeleteOutlined,
  DotChartOutlined,
  FileImageOutlined,
  SearchOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import StickyBox from "react-sticky-box";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMessages } from "../api/messageApi";
import { useSelector } from "react-redux";

import { useMutation } from "@tanstack/react-query";
import { Avatar, Badge, Dropdown, Input, Layout, Modal, message } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { blockUser } from "../api/userApi";

const PAGE_SIZE = 5;

const ChatMain = () => {
  const items = [
    {
      key: "block",
      label: "block",
      icon: <CloseCircleOutlined />,
    },
    {
      key: "delete",
      label: "delete",
      icon: <DeleteOutlined />,
    },
  ];
  const userId = useSelector((state) => state.user.data.info?._id);
  const { conversationId } = useParams();

  const {
    data: dataMessages,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["messages"],
    queryFn: ({ pageParam = 0 }) => {
      return getMessages({ conversationId, page: pageParam, limit: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextCursor;
    },
  });

  console.log("fsdfsdf", dataMessages);

  const blockMutation = useMutation({
    mutationFn: blockUser,
  });
  const onClick = ({ key }) => {
    if (key === items[0].key) {
      showModal();
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    blockMutation.mutate("64370996f2307906f689d961");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Layout className="bg-white h-screen">
        <Header className="border-b-2 h-20 bg-white sticky top-0 px-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Avatar size="large" />
              <p className=" text-black font-medium mx-2 text-lg">Khánh Vi</p>
              <Badge size="default" status="success" />
            </div>
            <div className="flex justify-between items-center w-32">
              <SearchOutlined />
              <SearchOutlined />
              <Dropdown
                menu={{
                  items,
                  onClick,
                }}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
                trigger={["click"]}
              >
                <DotChartOutlined />
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content className="overflow-y-auto overflow-hidden mx-6 pt-3">
          {dataMessages?.pages[0]?.data &&
            dataMessages?.pages[0]?.data?.map((message, index) => (
              <div key={message._id}>
                {message?.senderId?._id === userId ? (
                  <>
                    <div
                      className="flex justify-end hover:cursor-pointer mt-2 flex-1"
                      onClick={() => alert("sdfsdf")}
                    >
                      <div className=" rounded-3xl bg-[#e6ebf5] w-fit px-4 py-1 break-all max-w-[55%]">
                        {message.content}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-end mt-1">
                      {index != dataMessages?.pages[0]?.data.length - 1 ? (
                        <>
                          {dataMessages?.pages[0]?.data[index + 1].senderId
                            ._id === userId ? (
                            <Avatar
                              size=""
                              className="mr-2"
                              src={message.senderId.avatar}
                            />
                          ) : (
                            <div className="w-[32px] mr-2"></div>
                          )}

                          <div className="flex-1">
                            <p className=" text-black font-medium ml-2 mb-1">
                              {index === 0 && message.senderId.username}

                              {index > 0 &&
                                dataMessages?.pages[0]?.data[index - 1].senderId
                                  ._id === userId &&
                                message.senderId.username}
                            </p>
                            <p className="w-fit px-4 py-1 bg-[#a49eed] rounded-3xl break-all max-w-[55%]">
                              {message.content}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <Avatar
                            size=""
                            className="mr-2"
                            src={message.senderId.avatar}
                          />
                          {/* <div className="w-[32px] mr-2"></div> */}
                          <div className="flex-1">
                            {dataMessages?.pages[0]?.data[index - 1].senderId
                              ._id === userId && (
                              <p className=" text-black font-medium ml-2 mb-1">
                                {message.senderId.username}
                              </p>
                            )}

                            <p className="w-fit px-4 py-1 bg-[#a49eed] rounded-3xl break-all max-w-[55%]">
                              {message.content}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          {/* <div className="flex items-end mt-2">
          <div className="w-[32px] mr-2"></div>
          <div className="flex-1">
            <p className=" text-black font-medium ml-2 mb-1">Khánh Vi</p>
            <p className="w-fit px-4 py-1 bg-[#a49eed] rounded-3xl break-all max-w-[55%]">
              kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
              kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            </p>
          </div>
        </div>
        <div className="flex items-end mt-2">
          <div className="w-[32px] mr-2"></div>
          <div className="flex-1">
            <div className="w-fit px-4 py-1 bg-[#a49eed] rounded-3xl break-all max-w-[55%]">
              content content content content content content content content
              content content
            </div>
          </div>
        </div>
        <div className="flex items-end mt-2">
          <Avatar
            size=""
            className="mr-2"
            src={
              "https://lh3.googleusercontent.com/a/AGNmyxbOjz_04UIvDuS0sHiJ0uGcVNbeondtxUGzHei7=s96-c"
            }
          />
          <div className="flex-1 flex flex-col">

            <div className="w-fit px-4 py-1 bg-[#a49eed] rounded-3xl break-all max-w-[55%]">
              content content content content content content
            </div>
          </div>
        </div> */}
        </Content>
        <Footer className="bg-white border-t-2 h-20 sticky bottom-0 flex justify-between items-center">
          <Input
            size="large"
            placeholder="Message"
            className="rounded-2xl bg-[#e6ebf5] text-black hover:border-[#a49eed]"
          />
          <div className="flex justify-around w-24">
            <SmileOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
            <FileImageOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
          </div>
        </Footer>
      </Layout>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Xác nhận block
      </Modal>
    </>
  );
};

export default ChatMain;
