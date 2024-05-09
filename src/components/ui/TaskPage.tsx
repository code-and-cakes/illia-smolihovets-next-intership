import { cn } from "@/lib/utils";
import React from "react";

type TaskPageProps = {
  children: React.ReactNode;
};

export default function TaskPage(props: TaskPageProps) {
  return (
    <div
      className={cn(
        "bg-linear-task border-linear-border mb-2 mr-2 mt-3 w-full rounded border text-gray-300"
      )}
    >
      {props.children}
    </div>
  );
}
