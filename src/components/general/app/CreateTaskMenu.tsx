"use client";

import TaskPage from "@/components/general/app/TaskPage";
import { cn } from "@/lib/utils";
import { createTask } from "@/supabase/tasks";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface ITaskInput {
  taskName: string;
  taskTitle: string;
}

type CreateTaskMenuProps = {
  projectName: any;
  projectId: any;
  userId: any;
};

export default function CreateTaskMenu(props: CreateTaskMenuProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<ITaskInput>();
  const onSubmit: SubmitHandler<ITaskInput> = async (data) => {
    // console.log(props.userId);
    createTask(data.taskName, data.taskTitle, props.userId, props.projectId);
    router.push(`/projects/${props.projectId}`);
    router.refresh();
  };

  return (
    <TaskPage>
      <div className="m-auto mt-16 flex min-h-fit w-8/12 flex-1 flex-col text-white">
        <div className="mb-4 flex  flex-col border-b border-linear-border pb-5">
          <span className="text-3xl">Create task menu</span>
          <span className="text-gray-400">
            Create new task on {props.projectName}.
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">Task name</div>
          <input
            className={cn(
              "focus:border-linear-button mb-7 w-fit rounded border border-linear-popover-border bg-inherit p-1 outline-none"
            )}
            placeholder="New Task"
            {...register("taskName")}
          ></input>
          <div className="mb-2">Task title</div>
          <textarea
            {...register("taskTitle")}
            className={cn(
              "h-80 w-full resize-none rounded border border-linear-popover-border bg-linear-popover-primary p-5 scrollbar scrollbar-thumb-linear-scrollbar scrollbar-w-1 focus:outline-none"
            )}
          ></textarea>
          <button type="submit">Create task</button>
        </form>
      </div>
    </TaskPage>
  );
}
