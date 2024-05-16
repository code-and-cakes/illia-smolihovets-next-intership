"use client";

import { createContext, useContext } from "react";

type HardDataListType = {
  priority: number;
  status: number;
  description: string;
  createDate: string;
  updateDate: string;
  assignTo: string;
  taskId: number;
};

type HardDataProjectType = {
  projectName: string;
  projectId: number;
  projectData: Array<HardDataListType>;
};

type HardDataContextProjectsType = {
  hardDataArray: Array<HardDataProjectType>;
};

const HardDataContext = createContext<HardDataContextProjectsType>(
  null as unknown as HardDataContextProjectsType
);

export const HardDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const hardData = [
    {
      projectName: "project 1",
      projectId: 1,
      projectData: [
        {
          priority: 1,
          status: 3,
          description: "This is the description of task 1",
          createDate: "5 May",
          updateDate: "8 May",
          assignTo: "Illia Smolihovets",
          taskId: 1,
        },
        {
          priority: 0,
          status: 5,
          description: "Description task 2 on project 1",
          createDate: "1 May",
          updateDate: "10 May",
          assignTo: "Valeriy Tapilov",
          taskId: 2,
        },
      ],
    },
    {
      projectName: "project 2",
      projectId: 2,
      projectData: [
        {
          priority: 2,
          status: 4,
          description: "New description on project 2",
          createDate: "3 May",
          updateDate: "7 May",
          assignTo: "Moloda Vovchika",
          taskId: 3,
        },
        {
          priority: 2,
          status: 4,
          description: "One more description project 2",
          createDate: "3 May",
          updateDate: "7 May",
          assignTo: "Illia Smolihovets",
          taskId: 4,
        },
      ],
    },
    {
      projectName: "project 3",
      projectId: 3,
      projectData: [
        {
          priority: 1,
          status: 3,
          description: "Project 3 description",
          createDate: "5 May",
          updateDate: "8 May",
          assignTo: "Valeriy Tapilov",
          taskId: 1,
        },
        {
          priority: 1,
          status: 3,
          description: "One more project 3 description",
          createDate: "5 May",
          updateDate: "8 May",
          assignTo: "Moloda Vovchika",
          taskId: 1,
        },
      ],
    },
  ];

  // const hardData = [
  //   {
  //     projectName: "test project",
  //     priority: 1,
  //     status: 3,
  //     description: "something",
  //     createDate: "5 May",
  //     updateDate: "8 May",
  //     assignTo: "Illia Smolihovets",
  //     taskId: 1,
  //   },
  //   {
  //     projectName: "test project 2",
  //     priority: 2,
  //     status: 4,
  //     description: "more something",
  //     createDate: "3 May",
  //     updateDate: "7 May",
  //     assignTo: "Moloda Vovchika",
  //     taskId: 2,
  //   },
  // ];

  return (
    <HardDataContext.Provider value={{ hardDataArray: hardData }}>
      {children}
    </HardDataContext.Provider>
  );
};

export function useHardDataContext() {
  return useContext(HardDataContext);
}
