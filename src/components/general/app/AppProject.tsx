import TaskPage from "@/components/general/app/TaskPage";
import TaskProjectList from "@/components/general/app/TaskProjectList";
import { cn } from "@/lib/utils";
import { getProjectsData } from "@/supabase/projects";
import { getTasksData } from "@/supabase/tasks";
import { getUserData } from "@/supabase/users";

// type AppProjectProps = {
//   projectId: number;
//   projectsList: any;
//   tasksList: any;
// };

export default async function AppProject({ projectId }: { projectId: number }) {
  const projectsList = await getProjectsData();
  const currentUser = await getUserData();
  const tasksList = await getTasksData();
  return (
    <TaskPage>
      <div className="border-inherit py-3 pl-5">Project page</div>
      <div className={cn("bg-linear-todo py-3 pl-5")}>Todo</div>
      <TaskProjectList
        tasksList={tasksList}
        projectsList={projectsList}
        projectId={projectId}
      />
    </TaskPage>
  );
}

// AppProject and AppTasks using the same logic. Need to refactor it.
