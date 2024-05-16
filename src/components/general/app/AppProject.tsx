import TaskProjectList from "@/components/general/app/TaskProjectList";
import TaskPage from "@/components/ui/TaskPage";
import { cn } from "@/lib/utils";

export default function AppProject({ projectId }: { projectId: number }) {
  return (
    <TaskPage>
      <div className="border-inherit py-3 pl-5">Project page</div>
      <div className={cn("bg-linear-todo py-3 pl-5")}>Todo</div>
      <TaskProjectList projectId={projectId}></TaskProjectList>
    </TaskPage>
  );
}

// AppProject and AppTasks using the same logic. Need to refactor it.
