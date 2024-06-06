"use client";

import React, { useState } from "react";
import Input from "./input";
import { useHomeDispatchHook, useHomeHook } from "../context";
import { SUBJECT_LIST, THINKER_LIST } from "../constant";
import Thinker from "./thinker";
import { Modal } from "@/src/shared/common-ui/dialog";
import { useRouter } from "next/navigation";

export const ThinkerListContainer = () => {
  const router = useRouter();

  const home = useHomeHook();
  const homeDispatch = useHomeDispatchHook();

  const [isOpen, setIsOpen] = useState(false);

  const subjectList = SUBJECT_LIST;
  const thinkerList = THINKER_LIST;
  const filteredList = thinkerList.filter((thinker) => {
    return (
      thinker.name.includes(home.searchText) || // 한국어 일치
      thinker.nameEn.includes(home.searchText) || // 영어 일치
      thinker.subjectList // 주제 일치
        .map((id) => subjectList.find((subject) => subject.id === id)?.name ?? "")
        .some((subjectName) => subjectName.includes(home.searchText))
    );
  });

  const resultList = filteredList.length === 0 ? thinkerList : filteredList;

  const handleClick = (id: number) => {
    homeDispatch.setHome((state) => ({
      ...state,
      thinkerId: id,
    }));
    setIsOpen(true);
  };

  return (
    <div className=" h-[calc(100vh-32px-28px-32px-48px-24px)] flex flex-col gap-y-32 overflow-scroll hide-scrollbar">
      {resultList.map((thinker, index) => (
        <Thinker key={index} thinker={thinker} handleClick={() => handleClick(thinker.id)} />
      ))}
      <div className=" mt-[60px]" />
      <Modal.DialogMultiBtn
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        title={"어떤 주제에 관한 질문인가요?"}
        btnList={thinkerList
          .find((thinker) => thinker.id === home.thinkerId)
          ?.subjectList.map((subjectId) => {
            return {
              btnId: subjectId,
              btnText: subjectList.find((subject) => subject.id === subjectId)?.name ?? "",
              btnClick: () => router.push(`/chat?thinker=${home.thinkerId}&subject=${subjectId}`),
            };
          })}
      />
    </div>
  );
};
