import {
  FileImageOutlined,
  SmileOutlined,
  PlusCircleOutlined,
  DownloadOutlined,
  LinkOutlined,
  FileOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Image, Upload } from "antd";

import { Input } from "antd";
import { Footer } from "antd/es/layout/layout";

const ChatFooter = () => {
  const [imgList, setImgList] = useState([]);

  const propUpload = {
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
  };

  return (
    <Footer className="bg-white border-t-2 h-[200px] sticky bottom-0">
      <div className="flex rounded-xl bg-[#e6ebf5] flex-col justify-between items-center">
        {/* <div className=" flex  flex-col justify-between items-center w-full h-full hover:border-[#a49eed]">
         
        </div> */}
        <div className="flex-1 bg-teal-200 w-full p-2  rounded-xl flex">
          <Upload>
            <Button
              className="mr-3 bg-slate-400 flex justify-center items-center"
              icon={<PlusCircleOutlined />}
              size={"large"}
            />
          </Upload>

          <div className="flex flex-1 gap-3 overflow-x-scroll">
            <div className="relative">
              <Button
                shape="circle"
                className=" absolute z-10 top-0 -right-2 bg-slate-700 flex items-center justify-center "
                icon={<CloseOutlined />}
                size={"small"}
                onClick={() => alert("foskfosd")}
              />
              <Image
                preview={false}
                className=" rounded-lg"
                width={60}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>{" "}
            <div className="relative">
              <Button
                shape="circle"
                className=" absolute z-10 top-0 -right-2 bg-slate-700 flex items-center justify-center "
                icon={<CloseOutlined />}
                size={"small"}
                onClick={() => alert("foskfosd")}
              />
              <Image
                preview={false}
                className=" rounded-lg"
                width={60}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
            <div className="relative">
              <Button
                shape="circle"
                className=" absolute z-10 top-0 -right-2 bg-slate-700 flex items-center justify-center "
                icon={<CloseOutlined />}
                size={"small"}
                onClick={() => alert("foskfosd")}
              />
              <div className="rounded-xl w-fit bg-slate-500 flex break-all items-center justify-center max-w-[230px] p-2">
                <FileOutlined className="text-white" />
                <p className="text-white ml-2 truncate">
                  fdgfdgdfgdfgdfgfdgfdgdfgdfgdfgfdgfdgdfgdfgdfg.txt
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center">
          <Input
            size="large"
            bordered={false}
            placeholder="Message"
            className="rounded-b-xl bg-[#e6ebf5] hover:bg-[#e6ebf5] focus:bg-[#e6ebf5] text-black "
          />
          <div className="flex justify-around mx-3 gap-3">
            <SmileOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
            <Upload {...propUpload}>
              <LinkOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
            </Upload>
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
