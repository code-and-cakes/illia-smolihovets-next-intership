"use client";

import TaskList from "@/components/general/app/TaskList";
import TaskPage from "@/components/ui/TaskPage";

export default function AppIssues() {
  return (
    <TaskPage>
      <div>Issues page</div>
      <TaskList></TaskList>
    </TaskPage>
  );
}
