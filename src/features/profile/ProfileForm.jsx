import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Modal, Typography, Upload } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInfo } from "../../api/userApi";
import { useMutation } from "@tanstack/react-query";
import { updateUserInfo } from "../../redux/slices/userSlice";
const { Title } = Typography;

const ProfileForm = ({ isModalOpen, handleCancel }) => {
  const user = useSelector((state) => state.user.data.info);
  const [isEdit, setIsEdit] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [inputUsername, setInputUsername] = useState(user?.username);

  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: updateInfo,
    onSuccess: (data) => {
      dispatch(updateUserInfo(data.data));
    },
  });
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
    getBase64(info.file.originFileObj, (url) => {
      // setLoading(false);
      setImageUrl(url);
    });
    // if (info.file.status === "uploading") {
    //   setLoading(true);
    //   return;
    // }
    // if (info.file.status === "done") {
    //   // Get this url from response in real world.
    //   getBase64(info.file.originFileObj, (url) => {
    //     setLoading(false);
    //     setImageUrl(url);
    //   });
    // }
  };
  const uploadButton = (
    <div>
      {/* {loading ? <LoadingOutlined /> : <PlusOutlined />} */}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <Modal
      title="Your Profile"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width="570px"
      fileList={{ url: imageUrl }}
      className="hover:cusor-pointer"
    >
      <div className="flex flex-col pt-4 pb-2 gap-12">
        <div className="flex justify-around">
          {isEdit ? (
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader !w-[164px] h-[164px]"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          ) : (
            <Avatar size={164} icon={<UserOutlined />} />
          )}
          <div className="w-[322px]">
            <div className="border-t-[1px] border-b-[1px] p-2">
              <Title level={5}>Username</Title>
              {isEdit ? (
                <Input
                  placeholder="username"
                  defaultValue={inputUsername}
                  onChange={(e) => {
                    setInputUsername(e.target.value);
                  }}
                />
              ) : (
                <p>{user.username}</p>
              )}
            </div>
            <div className="border-t-[1px] border-b-[1px] p-2">
              <Title level={5}>Email</Title>
              {isEdit ? (
                <Input
                  placeholder="email"
                  defaultValue={user.email}
                  disabled={true}
                />
              ) : (
                <p>{user.email}</p>
              )}
            </div>
          </div>
        </div>

        {isEdit ? (
          <Button
            size="large"
            icon={<EditOutlined />}
            className="text-center m-auto w-[240px]"
            onClick={() => {
              setIsEdit(false);
              mutation.mutate({ username: inputUsername });
            }}
          >
            Save
          </Button>
        ) : (
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
        )}
      </div>
    </Modal>
  );
};

export default ProfileForm;
