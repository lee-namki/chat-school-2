"use client";
import React, { useContext } from "react";
import { createContext } from "react";

export type MessageType = {
  role: "user" | "assistant" | "loading";
  content: string;
};

type ChatState = {
  text: string;
  messageList: MessageType[];
};

type ChatDispatch = {
  setChat: React.Dispatch<React.SetStateAction<ChatState>>;
};

const ChatContext = createContext<null | ChatState>(null);
const ChatDispatchContext = createContext<null | ChatDispatch>(null);

export const ChatProvider = ({ children }: React.PropsWithChildren) => {
  const [chat, setChat] = React.useState<ChatState>({
    text: "",
    messageList: [
      {
        role: "assistant",
        content: "무엇이 궁금하신가요?",
      },
    ],
  });

  return (
    <ChatContext.Provider value={chat}>
      <ChatDispatchContext.Provider
        value={{
          setChat,
        }}
      >
        {children}
      </ChatDispatchContext.Provider>
    </ChatContext.Provider>
  );
};

export const useChatHook = () => {
  const value = useContext(ChatContext);
  if (value === null) throw new Error("컨텍스트가 없음");
  return value;
};
export const useChatDispatchHook = () => {
  const value = useContext(ChatDispatchContext);
  if (value === null) throw new Error("디스패치 컨텍스트가 없음");
  return value;
};

// const GaramConsumer = () => {
//   const garam = useGaramHook();
//   return (
//     <div className="">
//       <div className="">{garam.age}</div>
//       <div className="">{garam.name}</div>
//       <div className="">{garam.univ}</div>
//     </div>
//   );
// };

// const GaramTrans = () => {
//   const garamDispatch = useGaramDispatchHook();
//   return (
//     <button
//       onClick={() => {
//         garamDispatch.setGaram((state) => ({
//           ...state,
//           age: state.age + 1,
//         }));
//       }}
//     >
//       가람님 나이를 한살 더 먹게하기
//     </button>
//   );
// };
