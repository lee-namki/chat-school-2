import React from "react";

interface BtnType {
  btnId: number;
  btnText: string;
  btnClick: () => void;
}

interface DialogMultiBtnProps {
  isOpen: boolean;
  onOpenChange: (bool: boolean) => void;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  title?: string;
  btnList?: BtnType[];
  description?: string;
  textPrimary?: string;
  textSecondary?: string;
  primaryFirst?: boolean;
}

const DialogMultiBtn = ({
  onOpenChange,
  isOpen,
  title,
  btnList,
  description,
  primaryFirst,
  textPrimary,
  textSecondary,
  onPrimaryClick,
  onSecondaryClick,
}: DialogMultiBtnProps) => {
  console.log("Tezt", btnList);

  return isOpen && btnList ? (
    <div>
      <div
        onClick={() => onOpenChange(false)}
        className="fixed top-0 z-10 left-0 w-screen h-screen bg-neutral-60 backdrop-blur-sm"
      ></div>
      <div className=" z-30">
        <div className="fixed top-[50%] translate-y-[-50%] z-30 translate-x-[-50%] left-[50%]">
          <div className=" relative">
            <div className=" bg-white rounded-md max-w-[calc(100vw-48px)]  sm:max-w-[372px] w-screen">
              <article className="bg-white flex flex-col items-center rounded-md py-24 pl-24 pr-24">
                <h5 className="text-[16px] font-[700] text-cs-gray700">{title}</h5>
                <p className="font-bold text-center text-14">{description}</p>
                <div className=" flex flex-col w-full mt-24 gap-12 text-14 font-bold">
                  {btnList.map((btn, index) => (
                    <div
                      key={index}
                      className="grow  py-12 bg-gray-10 whitespace-nowrap text-gray-60 font-bold rounded-[28px] text-center"
                      onClick={btn.btnClick}
                    >
                      {btn.btnText}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default DialogMultiBtn;
