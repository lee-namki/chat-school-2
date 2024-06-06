import React from "react";
import { ChatProvider } from "./context";
import { TextContainer } from "./component/text.container";
import { InputContainer } from "./component/input.container";
import SubjectTitleContainer from "./component/subject-title.container";
import BackBarContainer from "@/app/chat/component/back-bar.container";
import { ChatListContainer } from "./component/chat-list.container";

const ChatPage = () => {
  return (
    <ChatProvider>
      <div className=" w-full h-full min-h-screen flex flex-col bg-cs-gray200">
        <div className=" h-[40px]" />
        <BackBarContainer />
        <div className=" h-[32px]" />
        <div className="relative w-full h-full min-h-[calc(100vh-32px-24px-40px)] px-24 rounded-t-[50px] flex flex-col bg-white">
          <SubjectTitleContainer />
          <div className="h-[32px]" />
          <ChatListContainer />
        </div>
      </div>
      <InputContainer />
    </ChatProvider>
  );
};

export default ChatPage;
