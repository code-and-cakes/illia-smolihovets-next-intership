"use client";

import TaskUserList from "@/components/general/app/TaskUserList";
import TaskPage from "@/components/ui/TaskPage";
import { cn } from "@/lib/utils";

export default function AppTasks() {
  // let userName = "Illia Smolihovets";
  let userName = "Valeriy Tapilov";
  // let userName = "Moloda Vovchika";
  return (
    <TaskPage>
      <div className="border-inherit py-3 pl-5">Issues page</div>
      <div className={cn("bg-linear-todo py-3 pl-5")}>Todo</div>
      <TaskUserList userName={userName}></TaskUserList>
    </TaskPage>
  );
}
