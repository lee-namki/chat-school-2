import Image from "next/image";
import React from "react";

interface AppBarProps {
  page: string;
}

const AppBar = ({ page }: AppBarProps) => {
  return (
    <div className=" fixed bottom-0 w-full max-w-[450px] h-[60px] px-24 bg-gray-10 flex flex-row justify-between items-center shadow-drop">
      <div className=" w-75 h-28 flex flex-col justify-center items-center">
        {page === "home" ? (
          <Image src={"/asset/common/ic-people-fill-on.png"} alt="thinker profile" width={24} height={24} />
        ) : (
          <Image src={"/asset/common/ic-people-fill-off.png"} alt="thinker profile" width={24} height={24} />
        )}
      </div>
      <div className=" w-75 h-28 flex flex-col justify-center items-center">
        {page === "chat" ? (
          <Image src={"/asset/common/ic-chat-fill-on.png"} alt="thinker profile" width={24} height={24} />
        ) : (
          <Image src={"/asset/common/ic-chat-fill-off.png"} alt="thinker profile" width={24} height={24} />
        )}
      </div>
      <div className=" w-75 h-28 flex flex-col justify-center items-center">
        {page === "setting" ? (
          <Image src={"/asset/common/ic-gear-fill-on.png"} alt="thinker profile" width={24} height={24} />
        ) : (
          <Image src={"/asset/common/ic-gear-fill-off.png"} alt="thinker profile" width={24} height={24} />
        )}
      </div>
    </div>
  );
};

export default AppBar;
