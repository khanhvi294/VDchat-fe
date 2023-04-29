import React, { useRef, useEffect } from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { Avatar } from "antd";
import { Content } from "antd/es/layout/layout";
import { getMessages } from "../../api/messageApi";
import { useSelector } from "react-redux";

const ChatBody = ({ conversationId }) => {
  const messagesEndRef = useRef(null);
  const PAGE_SIZE = 5;
  const userId = useSelector((state) => state.user.data.info?._id);
  const queryClient = useQueryClient();
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

  queryClient.setQueryData(["messages"], (oldData) => {
    // return [...oldData, newData]
  });
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [dataMessages]);

  return (
    <Content className="overflow-y-auto overflow-hidden mx-6 pt-3 pr-5 mb-3">
      {dataMessages?.pages[0]?.data &&
        dataMessages?.pages[0]?.data?.map((message, index) => (
          <div key={message._id}>
            {message?.senderId?._id === userId ? (
              <>
                <div
                  className="flex justify-end  mt-0.5 flex-1"
                  onClick={() => alert("sdfsdf")}
                >
                  <div className=" rounded-xl bg-[#e6ebf5] w-fit px-4 py-1 break-all max-w-[55%]">
                    {message.content}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-end">
                  {index != dataMessages?.pages[0]?.data.length - 1 ? (
                    <>
                      {dataMessages?.pages[0]?.data[index + 1].senderId._id ===
                      userId ? (
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
                        <p className="w-fit px-4 py-1 bg-[#a49eed] rounded-xl break-all max-w-[55%]">
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

                        <p className="w-fit px-4 py-1 bg-[#a49eed] rounded-xl break-all max-w-[55%]">
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

      <div ref={messagesEndRef} />
    </Content>
  );
};

export default ChatBody;
