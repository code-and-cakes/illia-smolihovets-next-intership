import { cn } from "@/lib/utils";
import React from "react";

type TaskPageProps = {
  children: React.ReactNode;
};

export default function TaskPage(props: TaskPageProps) {
  return (
    <div
      className={cn(
        "mb-2 mr-2 mt-3 flex w-full flex-col rounded border border-linear-border bg-linear-task pb-10 text-gray-300",
        "overflow-y-auto scrollbar scrollbar-thumb-linear-scrollbar scrollbar-w-1"
      )}
    >
      {props.children}
    </div>
  );
}
