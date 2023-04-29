import { FileImageOutlined, SmileOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Input } from "antd";
import { Footer } from "antd/es/layout/layout";
import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import { createMessage } from "../../api/messageApi";

const ChatFooter = ({ conversationId }) => {
  const [inputChat, setInputChat] = useState("");
  const [displayEmoji, setDisplayEmoji] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputElement = useRef();
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
    inputElement.current.input.selectionEnd = cursorPosition;
    inputElement.current.input.focus();
  }, [cursorPosition]);

  const createMessageMutation = useMutation({
    mutationFn: createMessage,
  });
  return (
    <Footer className="bg-white border-t-2 h-20 sticky bottom-0 flex justify-between items-center">
      <Input
        size="large"
        value={inputChat}
        placeholder="Message"
        className="rounded-2xl bg-[#e6ebf5] text-black hover:border-[#a49eed]"
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
      <div className="flex justify-around w-24">
        <div className="relative">
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
        <FileImageOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
      </div>
    </Footer>
  );
};

export default ChatFooter;
