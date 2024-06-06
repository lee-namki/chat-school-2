"use client";
import React from "react";
import { TanstackProvider } from "./tanstak-query";
import { LoggerProvider } from "@/src/feature/logging/core";

export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <TanstackProvider>
      <div className="  w-full h-full min-h-screen flex items-center justify-center bg-[#F5F5F5]">
        <div className=" relative w-full min-h-screen h-full bg-white xs:w-[450px]">{children}</div>
      </div>
      <LoggerProvider />
    </TanstackProvider>
  );
};
