"use client";
import { MessageType, useChatDispatchHook, useChatHook } from "../context";

export const useGpt = () => {
  const chat = useChatHook();
  const chatDispatch = useChatDispatchHook();

  const text = chat.text;

  const apiEndpoint = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY; // 환경 변수를 사용합니다.

  const sendMessage = async () => {
    if (!apiKey) {
      console.error("API 키가 설정되지 않았습니다.");
      return;
    }

    if (text.replaceAll(" ", "") === "") {
      console.log("텍스트가 없습니다");
      return;
    }

    let tempList: MessageType[] = [
      ...chat.messageList,
      {
        role: "user",
        content: text,
      },
    ];
    chatDispatch.setChat((state) => ({
      ...state,
      text: "",
      messageList: [
        ...tempList,
        {
          role: "loading",
          content: "",
        },
      ],
    }));

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: tempList,
        }),
      });

      const data = await res.json();
      const botMessage = data.choices[0].message.content;

      chatDispatch.setChat((state) => ({
        ...state,
        text: "",
        messageList: [
          ...tempList,
          {
            role: "assistant",
            content: botMessage,
          },
        ],
      }));
    } catch (error) {
      console.error("Error calling the OpenAI API", error);
    }
  };

  return {
    sendMessage,
  };
};
