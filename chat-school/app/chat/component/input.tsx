import Image from "next/image";
import React from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  text: string;
  handleClick: () => void;
}

const Input = ({ text, handleClick, ...attributes }: InputProps, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div className=" fixed bottom-[0px] w-[calc(100%-48px)] max-w-[calc(450px-48px)] h-[100px] left-[50%] translate-x-[-50%] bg-white-left flex justify-center items-center">
      <div className="w-full  h-[56px] px-16 bg-cs-gray100 rounded-[20px] flex items-center justify-between">
        <input
          {...attributes}
          className=" w-[calc(100%-36px-12px)] bg-cs-gray100 outline-none  text-cs-gray700 font-[500] text-[14px] placeholder-cs-gray500"
          ref={ref}
          value={text}
        />
        <Image src="/asset/common/btn-send.png" alt="" width={36} height={36} onClick={handleClick} />
      </div>
    </div>
  );
};

export default React.forwardRef(Input);
