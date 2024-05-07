import TaskComponent from "@/components/ui/TaskComponent";
import TaskPage from "@/components/ui/TaskPage";
import React from "react";

type AppProjectProps = {
  children: React.ReactNode;
};

export default function AppProject() {
  return (
    <TaskPage>
      <div>Project page</div>
      <TaskComponent></TaskComponent>
      <TaskComponent></TaskComponent>
      <TaskComponent></TaskComponent>
    </TaskPage>
  );
}
