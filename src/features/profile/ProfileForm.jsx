import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Modal, Typography, Upload } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const { Title } = Typography;

const ProfileForm = ({ isModalOpen, handleCancel }) => {
  const user = useSelector((state) => state.user.data.info);
  const [isEdit, setIsEdit] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  return (
    <Modal
      title="Your Profile"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width="570px"
      className="hover:cusor-pointer"
    >
      <div className="flex flex-col pt-4 pb-2 gap-12">
        <div className="flex justify-around">
          {isEdit ? (
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
              size={164}
            >
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            </Upload>
          ) : (
            <Avatar size={164} icon={<UserOutlined />} />
          )}
          <div className="w-[322px]">
            <div className="border-t-[1px] border-b-[1px] p-2">
              <Title level={5}>Username</Title>
              <p>{user.username}</p>
            </div>
            <div className="border-t-[1px] border-b-[1px] p-2">
              <Title level={5}>Email</Title>
              {user.email}
            </div>
          </div>
        </div>

        <Button
          size="large"
          icon={<EditOutlined />}
          className="text-center m-auto w-[240px]"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
        </Button>
      </div>
    </Modal>
  );
};

export default ProfileForm;
