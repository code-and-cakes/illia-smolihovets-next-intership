"use client";

import TaskPage from "@/components/general/app/TaskPage";
import { cn } from "@/lib/utils";
import { Task, updateTaskContent } from "@/supabase/tasks";
import { useRouter } from "next/navigation";
import { useState } from "react";

type TaskContentProps = {
  taskId: number;
  taskContent: Task;
};

export default function TaskContent(props: TaskContentProps) {
  const router = useRouter();

  const [editContent, setEditContent] = useState(true);
  const [postContent, setPostContent] = useState(props.taskContent?.task_data);

  const handleOpenContent = () => {
    setEditContent(!editContent);
  };

  const handleSetContent = (value: string) => {
    setPostContent(value);
  };

  const updateContent = () => {
    updateTaskContent(postContent, props.taskId);
    handleOpenContent();
    router.refresh();
  };

  const cancelContent = () => {
    const currentValue = postContent;
    setPostContent(currentValue);
    handleOpenContent();
  };

  const saveEditButton = () => {
    if (editContent) {
      return <div>Edit</div>;
    } else
      return (
        <>
          <div
            onClick={() => {
              cancelContent();
            }}
          >
            Cancel
          </div>
          <div className="ml-8" onClick={() => updateContent()}>
            Save
          </div>
        </>
      );
  };

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
          className="flex flex-row"
        >
          {saveEditButton()}
        </div>
      </div>
      <textarea
        disabled={editContent}
        className={cn(
          "scrollbar-thumb-linear-scrollbar scrollbar-w-1 scrollbar w-full flex-1 resize-none bg-inherit p-5 focus:outline-none"
        )}
        value={postContent}
        onChange={(e) => handleSetContent(e.target.value)}
      />
    </TaskPage>
  );
}
