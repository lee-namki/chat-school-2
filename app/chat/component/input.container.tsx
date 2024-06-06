"use client";

import React from "react";
import Input from "./input";
import { useChatDispatchHook, useChatHook } from "../context";
import { useGpt } from "../hook/use-gpt";

export const InputContainer = () => {
  const chat = useChatHook();
  const chatDispatch = useChatDispatchHook();
  const gpt = useGpt();

  return (
    <Input
      onChange={(e) => {
        chatDispatch.setChat((state) => ({
          ...state,
          text: e.target.value,
        }));
      }}
      text={chat.text}
      handleClick={() => {
        gpt.sendMessage();
      }}
    />
  );
};
