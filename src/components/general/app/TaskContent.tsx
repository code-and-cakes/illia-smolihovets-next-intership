"use client";

import TaskPage from "@/components/general/app/TaskPage";
import { cn } from "@/lib/utils";
import { Task } from "@/supabase/tasks";
import { Textarea } from "@headlessui/react";
import { useState } from "react";

type TaskContentProps = {
  taskId: number;
  taskContent?: Task;
};

type taskDescriptionProps = {
  taskDescription: string | undefined;
};

// function TaskTextArea({ taskDescription }: taskDescriptionProps) {
//   const [editContent, setEditcontent] = useState(false);
//   const handleChange = (taskDescription: string | undefined) => {
//     console.log(taskDescription);
//     return taskDescription;
//   };

//   return (
//     <Textarea disabled={false} className={cn("w-full bg-inherit p-5")}>
//       {handleChange(taskDescription)}
//     </Textarea>
//   );
// }

export default function TaskContent(props: TaskContentProps) {
  const [editContent, setEditContent] = useState(true);

  const handleOpenContent = () => {
    setEditContent(false);
  };

  console.log(props.taskContent?.task_data);

  return (
    <TaskPage>
      <div
        className={cn("flex flex-row justify-between bg-linear-todo px-5 py-3")}
      >
        <div>{props.taskContent?.task_name}</div>
        <div
          onClick={() => {
            handleOpenContent();
          }}
        >
          Edit
        </div>
      </div>
      <Textarea disabled={editContent} className={cn("w-full bg-inherit p-5")}>
        {props.taskContent?.task_data}
      </Textarea>
    </TaskPage>
  );
}
