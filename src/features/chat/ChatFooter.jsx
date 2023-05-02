import React, { useEffect, useRef, useState } from "react";
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
import { Button, Image, Upload } from "antd";
import PreviewFileList from "../../component/PreviewFilesList";
import { Input } from "antd";
import { Footer } from "antd/es/layout/layout";
import { createMessage } from "../../api/messageApi";
import { useMutation } from "@tanstack/react-query";
import createUrlImage from "../../utils/createUrlImg";

import EmojiPicker from "emoji-picker-react";

const ChatFooter = ({ conversationId }) => {
  const [inputChat, setInputChat] = useState("");
  const [displayEmoji, setDisplayEmoji] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputElement = useRef();
  const emojiPickerRef = useRef();
  console.log(inputChat);
  const pickerEmoji = (emoji) => {
    inputElement.current.input.focus();
    let message =
      inputChat.substring(0, inputElement.current.input.selectionStart) +
      emoji +
      inputChat.substring(inputElement.current.input.selectionStart);
    setInputChat(message);
    setCursorPosition(inputElement.current.input.selectionStart + emoji.length);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setDisplayEmoji(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [emojiPickerRef]);

  useEffect(() => {
    inputElement.current.input.selectionEnd = cursorPosition;
    inputElement.current.input.focus();
  }, [cursorPosition]);

  const createMessageMutation = useMutation({
    mutationFn: createMessage,
  });
  const [imgList, setImgList] = useState([]);

  const [filesList, setFilesList] = useState([]);

  const handleRemoveFileChosen = (indexFile) => {
    setFilesList((prev) => prev.filter((file) => file.key !== indexFile));
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
    if (filesList.length) {
      // let base64s = await Promise.all(
      //   fileList.map(async (file) => await convertBase64(file.file))
      // );
      // console.log("base64s", base64s);
      // createMessageMutation.mutate(base64s);
      const formData = new FormData();
      filesList.forEach((file) => {
        formData.append("filesList", file.file);
      });
      // formData.append("files[]", fileList);
      // formData.append("file", fileList[1].file);
      // formData.append("fs", "sfd");

      console.log("formdata", filesList);
      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }
      createMessageMutation.mutate(formData);
    }
  };

  const handleFileInputChange = (e) => {
    let files = [];
    let index = filesList.length || 0;
    for (let i = 0; i < e.target.files.length; i++) {
      files.push({
        key: index++,
        url:
          e.target.files[i].type.includes("image") &&
          createUrlImage(e.target.files[i]),
        file: e.target.files[i],
        type: e.target.files[i].type.includes("image") ? "image" : "file",
        name: e.target.files[i].name,
      });
    }
    setFilesList([...filesList, ...files]);
  };
  // console.log("fileList ", fileList);

  return (
    <Footer
      className={`bg-white border-t-2 {${
        filesList.length ? "h-[200px]" : "h-20"
      }}} sticky bottom-0`}
    >
      <div
        className={`flex rounded-xl ${
          filesList.length ? "h-full" : ""
        }  bg-[#e6ebf5] flex-col flex-1 justify-between items-center`}
      >
        <PreviewFileList
          filesList={filesList}
          handleRemoveFileChosen={handleRemoveFileChosen}
        />
        <div className="flex w-full items-center">
          <Input
            size="large"
            bordered={false}
            placeholder="Message"
            className="rounded-b-xl bg-[#e6ebf5] hover:bg-[#e6ebf5] focus:bg-[#e6ebf5] text-black "
            value={inputChat}
            onChange={(e) => {
              setInputChat(e.target.value);
            }}
            ref={inputElement}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                const message = {
                  content: e.target.value,
                  conversationId: conversationId,
                };
                setInputChat("");
                createMessageMutation.mutate(message);
              }
            }}
          />
          <div className="flex items-center justify-around mx-3 gap-3">
            <Button
              type="text"
              icon={
                <SendOutlined className="relative -top-[5px] hover:cursor-pointer text-[22px] text-[#a49eed]" />
              }
              onClick={handleSubmitInput}
            />
            <div className="relative" ref={emojiPickerRef}>
              <div
                onClick={() => {
                  inputElement.current.input.focus();
                  setDisplayEmoji((prev) => !prev);
                }}
              >
                <SmileOutlined className="cursor:cursor-pointer text-[22px] text-[#a49eed]" />
              </div>
              {displayEmoji && (
                <div className="absolute bottom-10 right-0 drop-shadow-xl">
                  <EmojiPicker
                    native
                    onEmojiClick={(emoji) => pickerEmoji(emoji.emoji)}
                    emojiStyle="native"
                    autoFocusSearch={false}
                  />
                </div>
              )}
            </div>

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
          <div className="flex justify-around mx-3 gap-3">
            <div className="relative" ref={emojiPickerRef}>
              <div
                onClick={() => {
                  inputElement.current.input.focus();
                  setDisplayEmoji((prev) => !prev);
                }}
              >
                <SmileOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
              </div>
              {displayEmoji && (
                <div className="absolute bottom-10 right-0 drop-shadow-xl">
                  <EmojiPicker
                    native
                    onEmojiClick={(emoji) => pickerEmoji(emoji.emoji)}
                    emojiStyle="native"
                    autoFocusSearch={false}
                  />
                </div>
              )}
            </div>
            <Upload {...propUpload}>
              <LinkOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
            </Upload> */}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default ChatFooter;
