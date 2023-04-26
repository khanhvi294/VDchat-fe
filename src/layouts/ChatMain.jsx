import {
  CloseCircleOutlined,
  DeleteOutlined,
  DotChartOutlined,
  FileImageOutlined,
  SearchOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Avatar, Badge, Dropdown, Input, Layout, Modal } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { blockUser, unblockUser } from "../api/userApi";

const ChatMain = () => {
  const [items, setItems] = useState([
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
  ]);
  const keyItems = ["block", "unblock", "delete"];

  const blockMutation = useMutation({
    mutationFn: blockUser,
    onSuccess: () => {
      setItems((prev) => [
        {
          key: "unblock",
          label: "unblock",
          icon: <DeleteOutlined />,
        },
        prev[1],
      ]);
    },
  });
  const unblockMutation = useMutation({
    mutationFn: unblockUser,
    onSuccess: () => {
      setItems((prev) => [
        {
          key: "block",
          label: "block",
          icon: <DeleteOutlined />,
        },
        prev[1],
      ]);
    },
  });
  const onClick = ({ key }) => {
    if (key === keyItems[0]) {
      showModal();
    } else if (key === keyItems[1]) {
      unblockMutation.mutate("64370996f2307906f689d961");
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
        <Content className="overflow-y-auto overflow-hidden mx-6">
          <div className="flex items-end ">
            <Avatar size="large" className="mr-2" />
            <div>
              <p className=" text-black font-medium ml-2">Khánh Vi</p>
              <div className="w-fit px-4 py-1 bg-[#a49eed] rounded-3xl ">
                content
              </div>
            </div>
          </div>
          <div className=" rounded-3xl float-right  bg-[#e6ebf5] w-fit px-4 py-1">
            ahahahahahah
          </div>
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
