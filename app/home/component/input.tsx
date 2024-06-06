import React from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

const Input = ({ ...attributes }: InputProps, ref: React.Ref<HTMLInputElement>) => {
  return (
    <input
      {...attributes}
      className=" w-full h-[48px] bg-cs-gray100 rounded-[15px] outline-none px-18 text-cs-gray700 font-[500] placeholder-cs-gray500"
      ref={ref}
      placeholder="사상가 or 주제를 입력하세요 ex) 롤스"
    />
  );
};

export default React.forwardRef(Input);
