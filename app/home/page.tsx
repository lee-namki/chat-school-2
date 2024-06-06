import React from "react";
import { HomeProvider } from "./context";
import { InputContainer } from "./component/input.container";
import { ThinkerListContainer } from "./component/thinker-list.container";
import AppBar from "@/src/shared/common-ui/bar/app-bar";

const HomePage = () => {
  return (
    <HomeProvider>
      {/* <div className=" flex flex-col">
        <TextContainer />
        <InputContainer />
      </div> */}
      <div className=" px-24">
        <div className="h-32" />
        <p className=" text-[28px] font-[800] text-cs-gray700 leading-[100%]">Thinker List</p>
        <div className="h-32" />
        <InputContainer />
        <div className="h-24" />
        <ThinkerListContainer />
        {/* <div className=" h-[100px]" /> */}
      </div>
      <AppBar page={"home"} />
    </HomeProvider>
  );
};

export default HomePage;
