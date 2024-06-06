"use client";

import React from "react";
import Text from "./text";
import { useChatHook } from "../context";

export const TextContainer = () => {
  const chat = useChatHook();
  return <Text>{chat.text}</Text>;
};
