import TaskPage from "@/components/general/app/TaskPage";
import TaskUserList from "@/components/general/app/TaskUserList";
import { getTasksData } from "@/supabase/tasks";
import { getUserData, getUserProjectsData } from "@/supabase/users";

export default async function AppTasks() {
  const currentUser = await getUserData();
  const tasksList = await getTasksData();
  const userProjects = await getUserProjectsData();

  // console.log(currentUser);
  return (
    <TaskPage>
      <div className="border-inherit py-3 pl-5">Task page</div>
      <TaskUserList
        userProjects={userProjects}
        userName={currentUser.full_name}
        tasksList={tasksList}
      />
    </TaskPage>
  );
}
