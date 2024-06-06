"use client";
import React, { useContext } from "react";
import { createContext } from "react";

type HomeState = {
  searchText: string;
  thinkerId: number;
};

type HomeDispatch = {
  setHome: React.Dispatch<React.SetStateAction<HomeState>>;
};

const HomeContext = createContext<null | HomeState>(null);
const HomeDispatchContext = createContext<null | HomeDispatch>(null);

export const HomeProvider = ({ children }: React.PropsWithChildren) => {
  const [home, setHome] = React.useState<HomeState>({
    searchText: "",
    thinkerId: 0,
  });

  return (
    <HomeContext.Provider value={home}>
      <HomeDispatchContext.Provider
        value={{
          setHome,
        }}
      >
        {children}
      </HomeDispatchContext.Provider>
    </HomeContext.Provider>
  );
};

export const useHomeHook = () => {
  const value = useContext(HomeContext);
  if (value === null) throw new Error("컨텍스트가 없음");
  return value;
};
export const useHomeDispatchHook = () => {
  const value = useContext(HomeDispatchContext);
  if (value === null) throw new Error("디스패치 컨텍스트가 없음");
  return value;
};
