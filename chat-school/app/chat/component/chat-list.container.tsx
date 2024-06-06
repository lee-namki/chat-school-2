"use client";

import React, { useEffect, useRef } from "react";
import { useChatHook } from "../context";
import Image from "next/image";

export const ChatListContainer = () => {
  const chat = useChatHook();
  const messageList = chat.messageList;

  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTo({
        top: divRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messageList]);

  return (
    <div
      ref={divRef}
      className=" w-full h-[calc(100vh-60px-170px)] flex flex-col gap-y-18 overflow-scroll hide-scrollbar"
    >
      <div className=" mt-[8px]" />
      {messageList.map((message, index) => (
        <Chat key={index} role={message.role} content={message.content} />
      ))}
    </div>
  );
};

interface ChatProps {
  role: "user" | "assistant" | "loading";
  content: string;
}

const Chat = ({ role, content }: ChatProps) => {
  switch (role) {
    case "user":
      return (
        <div className=" w-full flex justify-end">
          <div className="max-w-[85%] bg-cs-blue px-18 py-10 rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px]">
            <p className=" text-[14px] font-[500] text-white leading-[150%]">{content}</p>
          </div>
        </div>
      );
    case "assistant":
      return (
        <div className=" w-full flex justify-start">
          <div className="max-w-[85%] bg-cs-gray100 px-18 py-10 rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px]">
            <p className=" text-[14px] font-[500] text-cs-gray700 leading-[150%]">{content}</p>
          </div>
        </div>
      );
    case "loading":
      return (
        <div className=" w-full flex justify-start">
          <div className="max-w-[85%] h-[41px] bg-cs-gray100 px-18 rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] flex justify-center items-center">
            <Image src={"/asset/common/loading-2.gif"} alt="loading" width={28} height={14} />
          </div>
        </div>
      );
    default:
      return <></>;
  }
};
