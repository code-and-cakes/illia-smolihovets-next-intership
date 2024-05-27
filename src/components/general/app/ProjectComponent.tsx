"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type ProjectComponentProps = {
  projectName: string;
  projectId: number;
};

export default function ProjectComponent(props: ProjectComponentProps) {
  const router = useRouter();
  return (
    <button
      className={cn(
        "my-px ml-3 h-7 w-full rounded pl-2 text-left hover:bg-linear-hover-sidebar focus:bg-linear-active"
      )}
      onClick={() => router.push(`/projects/${props.projectId}`)}
    >
      {props.projectName}
    </button>
  );
}
