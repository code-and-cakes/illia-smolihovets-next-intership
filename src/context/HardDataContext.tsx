"use client";

import { createContext, useContext } from "react";

type HardDataContextType = {
  projectName: string;
  priority: number;
  status: number;
  description: string;
  createDate: string;
  updateDate: string;
  assignTo: string;
  id: number;
};

type HardDataContextListType = {
  hardDataArray: Array<HardDataContextType>;
};

const HardDataContext = createContext<HardDataContextListType>(
  null as unknown as HardDataContextListType
);

export const HardDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const hardData = [
    {
      projectName: "test project",
      priority: 1,
      status: 3,
      description: "something",
      createDate: "5 May",
      updateDate: "8 May",
      assignTo: "Illia Smolihovets",
      id: 1,
    },
    {
      projectName: "test project 2",
      priority: 2,
      status: 4,
      description: "more something",
      createDate: "3 May",
      updateDate: "7 May",
      assignTo: "Moloda Vovchika",
      id: 2,
    },
  ];

  return (
    <HardDataContext.Provider value={{ hardDataArray: hardData }}>
      {children}
    </HardDataContext.Provider>
  );
};

export function useHardDataContext() {
  return useContext(HardDataContext);
}
