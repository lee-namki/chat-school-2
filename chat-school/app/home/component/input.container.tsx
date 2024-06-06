"use client";

import React from "react";
import Input from "./input";
import { useHomeDispatchHook } from "../context";

export const InputContainer = () => {
  const homeDispatch = useHomeDispatchHook();
  return (
    <Input
      onChange={(e) => {
        homeDispatch.setHome((state) => ({
          ...state,
          searchText: e.target.value,
        }));
      }}
    />
  );
};
