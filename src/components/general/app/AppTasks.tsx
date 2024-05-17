import TaskPage from "@/components/general/app/TaskPage";
import TaskUserList from "@/components/general/app/TaskUserList";
import { cn } from "@/lib/utils";
import { getTasksData } from "@/supabase/tasks";
import { getUserData } from "@/supabase/users";

export default async function AppTasks() {
  let currentUser = await getUserData();
  const tasksList = await getTasksData();

  console.log(currentUser);
  return (
    <TaskPage>
      <div className="border-inherit py-3 pl-5">Issues page</div>
      <div className={cn("bg-linear-todo py-3 pl-5")}>Todo</div>
      <TaskUserList userName={currentUser.full_name} tasksList={tasksList} />
    </TaskPage>
  );
}
