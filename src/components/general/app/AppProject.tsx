import TaskPage from "@/components/general/app/TaskPage";
import TaskProjectList from "@/components/general/app/TaskProjectList";
import { getProjectsData } from "@/supabase/projects";
import { getTasksData } from "@/supabase/tasks";

// type AppProjectProps = {
//   projectId: number;
//   projectsList: any;
//   tasksList: any;
// };

export default async function AppProject({ projectId }: { projectId: number }) {
  const projectsList = await getProjectsData();
  const tasksList = await getTasksData();
  return (
    <TaskPage>
      <div className="border-inherit py-3 pl-5">Project page</div>
      <TaskProjectList
        tasksList={tasksList}
        projectsList={projectsList}
        projectId={projectId}
      />
    </TaskPage>
  );
}

//// get 1 project by id with assigned users_data and its tasks

// AppProject and AppTasks using the same logic. Need to refactor it.
