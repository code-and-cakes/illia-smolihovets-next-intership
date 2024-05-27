import TaskPage from "@/components/general/app/TaskPage";
import TaskProjectList from "@/components/general/app/TaskProjectList";
import { getProjectDataById } from "@/supabase/projects";

// type AppProjectProps = {
//   projectId: number;
//   projectsList: any;
//   tasksList: any;
// };

export default async function AppProject({ projectId }: { projectId: number }) {
  const projectData = await getProjectDataById(projectId);
  return (
    <TaskPage>
      <div className="border-inherit py-3 pl-5">Project page</div>
      {projectData && <TaskProjectList projectData={projectData} />}
    </TaskPage>
  );
}

//// get 1 project by id with assigned users_data and its tasks

// AppProject and AppTasks using the same logic. Need to refactor it.
