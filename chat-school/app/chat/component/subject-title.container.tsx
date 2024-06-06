"use client";

import { SUBJECT_LIST } from "@/app/home/constant";
import { useSearchParams } from "next/navigation";
import React from "react";

interface SubjectTitleProps {}

const SubjectTitle = ({}: SubjectTitleProps) => {
  const searchParams = useSearchParams();
  const subjectId = searchParams.get("subject");

  const subjectList = SUBJECT_LIST;
  const subjectName = subjectList.find((subject) => subject.id === Number(subjectId))?.name ?? "";

  return (
    <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] px-12 py-4 bg-[#E9F0FF] rounded-full whitespace-nowrap">
      <p className=" text-[13px] text-cs-gray500 font-[500]">{subjectName}</p>
    </div>
  );
};

export default SubjectTitle;
