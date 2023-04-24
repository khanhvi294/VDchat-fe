import { EditOutlined } from "@ant-design/icons";
import { Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const ProfileForm = ({ isModalOpen, handleCancel }) => {
  return (
    <Modal
      // title="Basic Modal"
      open={isModalOpen}
      // onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width="fit-content"
      className="hover:cusor-pointer"
    >
      <Card
        style={{
          width: 334,
        }}
        cover={
          <img
            className="w-fit"
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          // <SettingOutlined key="setting" />,
          <p>
            <EditOutlined key="edit" /> chỉnh sửa
          </p>,
          // <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title={<p className="text-xl">Khánh Vi</p>}
          description="Khanhci294@gmail.com"
        />
      </Card>
    </Modal>
  );
};

export default ProfileForm;
