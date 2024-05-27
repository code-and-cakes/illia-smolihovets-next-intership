import TaskPage from "@/components/general/app/TaskPage";
import TaskUserList from "@/components/general/app/TaskUserList";
import { GetUserProjectsData, getUserTaskData } from "@/supabase/users";

export default async function AppTasks() {
  const userProjectsData = await GetUserProjectsData();
  const userTasksData = await getUserTaskData();
  return (
    <TaskPage>
      <div className="border-inherit py-3 pl-5">Task page</div>
      <TaskUserList
        userProjectsData={userProjectsData}
        userTasksData={userTasksData}
      />
    </TaskPage>
  );
}
