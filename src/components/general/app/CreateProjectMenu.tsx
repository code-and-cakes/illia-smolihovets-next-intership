"use client";

import TaskPage from "@/components/general/app/TaskPage";
import { cn } from "@/lib/utils";
import { createProject } from "@/supabase/projects";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProjectInput {
  projectName: string;
}

type CreateProjectMenuProps = {
  userId: any;
};

export default function CreateProjectMenu(props: CreateProjectMenuProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IProjectInput>();
  const onSubmit: SubmitHandler<IProjectInput> = async (data) => {
    createProject(props.userId, data.projectName);
    router.refresh();
  };

  return (
    <TaskPage>
      <div className="m-auto mt-16 flex min-h-fit w-8/12 flex-1 flex-col text-white">
        <div className="mb-4 flex  flex-col border-b border-linear-border pb-5">
          <span className="text-3xl">Create project menu</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">Project name</div>
          <input
            className={cn(
              "mb-7 w-fit rounded border border-linear-popover-border bg-inherit p-1 outline-none focus:border-linear-button"
            )}
            placeholder="New project"
            {...register("projectName")}
          ></input>
          <button type="submit">Create task</button>
        </form>
      </div>
    </TaskPage>
  );
}
