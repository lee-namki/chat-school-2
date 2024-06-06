import React from "react";
import { SUBJECT_LIST, ThinkerType } from "../constant";
import Image from "next/image";

interface ThinkerProps {
  thinker: ThinkerType;
  handleClick: () => void;
}

const Thinker = ({ thinker, handleClick }: ThinkerProps) => {
  const list = SUBJECT_LIST;

  return (
    <div className=" w-full flex flex-row gap-x-[24px]" onClick={handleClick}>
      <div className=" relative w-[72px] h-[72px] rounded-full overflow-hidden">
        <Image src={thinker.imgSrc} alt="thinker profile" layout="fill" objectFit="cover" />
      </div>
      <div className=" w-[calc(100%-72px-24px-8px)] flex flex-col gap-y-4">
        <p className=" text-[17px] font-[600] text-cs-gray700 leading-[170%] truncate">
          {
            thinker.name
            //   + " (" + thinker.nameEn + ")"
          }
        </p>
        <p className=" text-[13px] font-[400] text-cs-gray500 leading-[150%] line-clamp-2">{thinker.desc}</p>
      </div>
    </div>
  );
};

export default Thinker;
