"use client";

import TaskPage from "@/components/general/app/TaskPage";
import TaskProjectList from "@/components/general/app/TaskProjectList";
import { useRouter } from "next/navigation";

// type AppProjectProps = {
//   projectId: number;
//   projectsList: any;
//   tasksList: any;
// };

export default function AppProject({ projectData }: { projectData: any }) {
  const router = useRouter();

  return (
    <TaskPage>
      <div className="flex justify-between border-inherit px-5 py-3">
        <div>Project page</div>
        <button
          onClick={() =>
            router.push(`/projects/${projectData.project_id}/edit`)
          }
        >
          Edit Project
        </button>
      </div>
      {projectData && <TaskProjectList projectData={projectData} />}
    </TaskPage>
  );
}
