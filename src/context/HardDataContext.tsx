"use client";

import { createContext, useContext } from "react";

// type HardDataContextType = {
//   priority: number;
//   status: number;
//   description: string;
//   startDate: Date;
//   endDate: Date;
//   assignTo: string;
//   fromProject: string;
// };

type HardDataContextType = {
  HardData: { priority: number; status: number; description: string };
};

const HardDataContext = createContext<HardDataContextType>(
  null as unknown as HardDataContextType
);

export const HardDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const HardData = {
    1: {
      priority: 1,
      status: 3,
      description: "something",
    },
  };

  return (
    <HardDataContext.Provider value={HardData}>
      {children}
    </HardDataContext.Provider>
  );
};

export function useHardDataContext() {
  return useContext(HardDataContext);
}
