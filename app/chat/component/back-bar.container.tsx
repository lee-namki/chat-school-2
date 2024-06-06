"use client";
import { THINKER_LIST } from "@/app/home/constant";
import Image from "next/image";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface BackBarContainerProps {}

const BackBarContainer = ({}: BackBarContainerProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const thinkerId = searchParams.get("thinker");

  const thinkerList = THINKER_LIST;
  const thinkerName = thinkerList.find((thinker) => thinker.id === Number(thinkerId))?.name ?? "";

  return (
    <div className=" w-full px-24 flex justify-between">
      <Image src="/asset/common/ic-back.png" alt="" width={24} height={24} onClick={() => router.back()} />
      <p className=" text-[16px] font-[600] text-cs-gray700">{thinkerName}</p>
      <div className=" w-[24px] h-[24px]" />
    </div>
  );
};

export default BackBarContainer;
