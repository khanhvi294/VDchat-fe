import {
  FileImageOutlined,
  SmileOutlined,
  PlusCircleOutlined,
  DownloadOutlined,
  LinkOutlined,
  FileOutlined,
  CloseOutlined,
  SendOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Image, Upload } from "antd";
import PreviewFileList from "../../component/PreviewFilesList";
import { Input } from "antd";
import { Footer } from "antd/es/layout/layout";
import { createMessage } from "../../api/messageApi";
import { useMutation } from "@tanstack/react-query";
import createUrlImage from "../../utils/createUrlImg";

const ChatFooter = () => {
  const [fileList, setFileList] = useState([]);

  const createMessageMutation = useMutation(createMessage, {});

  const handleRemoveFileChosen = (indexFile) => {
    setFileList((prev) => prev.filter((file) => file.key !== indexFile));
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmitInput = async () => {
    if (fileList.length) {
      // let base64s = await Promise.all(
      //   fileList.map(async (file) => await convertBase64(file.file))
      // );
      // console.log("base64s", base64s);
      // createMessageMutation.mutate(base64s);
      const formData = new FormData();
      // fileList.forEach((file) => {
      //   formData.append("file", file.file);
      // });
      // formData.append("files[]", fileList);
      formData.append("file", fileList[0]);
      // formData.append("fs", "sfd");

      console.log("formdata", formData);
      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }
      createMessageMutation.mutate(formData);
    }
  };

  const handleFileInputChange = (e) => {
    let files = [];
    let index = fileList.length || -1;
    for (let i = 0; i < e.target.files.length; i++) {
      files.push({
        key: ++index,
        url:
          e.target.files[i].type.includes("image") &&
          createUrlImage(e.target.files[i]),
        file: e.target.files[i],
        type: e.target.files[i].type.includes("image") ? "image" : "file",
        name: e.target.files[i].name,
      });
    }
    setFileList([...fileList, ...files]);
  };
  // console.log("fileList ", fileList);

  return (
    <Footer
      className={`bg-white border-t-2 {${
        fileList.length ? "h-[200px]" : "h-20"
      }}} sticky bottom-0`}
    >
      <div
        className={`flex rounded-xl ${
          fileList.length ? "h-full" : ""
        }  bg-[#e6ebf5] flex-col flex-1 justify-between items-center`}
      >
        <PreviewFileList
          fileList={fileList}
          handleRemoveFileChosen={handleRemoveFileChosen}
        />
        <div className="flex w-full items-center">
          <Input
            size="large"
            bordered={false}
            placeholder="Message"
            className="rounded-b-xl bg-[#e6ebf5] hover:bg-[#e6ebf5] focus:bg-[#e6ebf5] text-black "
          />
          <div className="flex items-center justify-around mx-3 gap-3">
            {/* <SendOutlined className="hover:cursor-pointer text-[22px] text-[#a49eed]" /> */}
            <Button
              type="text"
              icon={
                <SendOutlined className="hover:cursor-pointer text-[22px] text-[#a49eed]" />
              }
              onClick={handleSubmitInput}
            />
            <SmileOutlined className="hover:cursor-pointer text-[22px] text-[#a49eed]" />
            <div className="">
              <label htmlFor="file-input" className="hover:cursor-pointer">
                <LinkOutlined className="hover:cursor-pointer text-[22px] text-[#a49eed]" />
              </label>
              <input
                onChange={handleFileInputChange}
                id="file-input"
                type="file"
                hidden
                multiple
              />
            </div>
            {/* <Upload 
              {...propUpload}
              showUploadList={false}
              multiple={true}
              // fileList={fileList}
              onChange={handleChangeFileList}
            >
              <LinkOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
            </Upload> */}
          </div>
        </div>
      </div>

      {/* <Input
        size="large"
        placeholder="Message"
        className="rounded-2xl bg-[#e6ebf5] text-black hover:border-[#a49eed]"
      />
      <div className="flex justify-around w-24">
        <SmileOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
        <FileImageOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
      </div> */}
    </Footer>
  );
};

export default ChatFooter;
