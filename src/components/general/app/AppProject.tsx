"use client";

import TaskList from "@/components/general/app/TaskList";
import TaskPage from "@/components/ui/TaskPage";
import React from "react";

type AppProjectProps = {
  children: React.ReactNode;
};

export default function AppProject() {
  const pageType = "Project";
  return (
    <TaskPage>
      <div>Project page</div>
      <TaskList></TaskList>
    </TaskPage>
  );
}
