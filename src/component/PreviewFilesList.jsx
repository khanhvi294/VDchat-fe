import React from "react";
import { Button, Image } from "antd";
import { FileOutlined, CloseOutlined } from "@ant-design/icons";

const PreviewFilesList = ({ fileList, handleRemoveFileChosen }) => {
  return (
    <>
      {fileList.length > 0 && (
        <div className="flex-1 w-full p-2 rounded-xl flex">
          <div className="flex flex-1 gap-3 overflow-x-scroll">
            {fileList.length &&
              fileList?.map((file) => (
                <div className="relative" key={file.key}>
                  <Button
                    shape="circle"
                    className=" absolute z-10 top-0 -right-2 bg-slate-700 flex items-center justify-center "
                    icon={<CloseOutlined />}
                    size={"small"}
                    onClick={() => handleRemoveFileChosen(file.key)}
                  />
                  {file.type === "image" ? (
                    <Image
                      preview={false}
                      className=" rounded-lg"
                      width={60}
                      height={59}
                      src={file.url}
                    />
                  ) : (
                    <div className="rounded-xl w-fit bg-slate-500 flex break-all items-center justify-center max-w-[230px] p-2">
                      <FileOutlined className="text-white" />
                      <p className="text-white ml-2 truncate">{file.name}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewFilesList;
