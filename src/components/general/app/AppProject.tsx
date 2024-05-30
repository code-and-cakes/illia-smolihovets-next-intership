"use client";

import TaskPage from "@/components/general/app/TaskPage";
import TaskProjectList from "@/components/general/app/TaskProjectList";
import { Cog8ToothIcon, PlusIcon } from "@heroicons/react/24/outline";
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
        <div className="flex items-center">
          <button
            className="pr-5"
            onClick={() =>
              router.push(`/projects/${projectData.project_id}/edit`)
            }
          >
            <Cog8ToothIcon className="size-5" />
          </button>
          <button
            onClick={() =>
              router.push(`/projects/${projectData.project_id}/create_task`)
            }
          >
            <PlusIcon className="size-5" />
          </button>
        </div>
      </div>
      {projectData && <TaskProjectList projectData={projectData} />}
    </TaskPage>
  );
}
