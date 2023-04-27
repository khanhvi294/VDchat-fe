import {
  CloseCircleOutlined,
  DeleteOutlined,
  DotChartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Avatar, Badge, Dropdown, Modal } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { blockUser, unblockUser } from "../../api/userApi";

const ChatHeader = () => {
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
  const userId = useSelector((state) => state.user.data.info?._id);
  const { conversationId } = useParams();

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

export default ChatHeader;
