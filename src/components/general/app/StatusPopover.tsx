import PagePopover from "@/components/ui/PagePopover";
import { cn } from "@/lib/utils";
import { updateTaskStatus } from "@/supabase/tasks";
import {
  CheckCircleIcon,
  PlayCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React from "react";

type StatusPopoverProps = {
  buttonIcon: any;
  taskStatus: string | undefined;
  taskId: number;
  children: React.ReactNode;
};

export default function StatusPopover(props: StatusPopoverProps) {
  const router = useRouter();
  return (
    <PagePopover buttonIcon={props.buttonIcon}>
      <div className={cn("border-linear-popover-border border-b p-2")}>
        Change Status
      </div>
      <button
        onClick={async () => {
          updateTaskStatus("ToDo", props.taskId);
          close();
          router.refresh();
        }}
        className={cn(
          "hover:bg-linear-popover-hover m-1 flex p-2 hover:rounded-lg"
        )}
      >
        <PlusCircleIcon className="mr-2 size-5" />
        <span>ToDo</span>
      </button>
      <button
        onClick={() => {
          updateTaskStatus("In Progress", props.taskId);
          router.refresh();
        }}
        className={cn(
          "hover:bg-linear-popover-hover m-1 flex p-2 hover:rounded-lg"
        )}
      >
        <PlayCircleIcon className="mr-2 size-5" />
        <span>In Progress</span>
      </button>
      <button
        onClick={() => {
          updateTaskStatus("Done", props.taskId);
          router.refresh();
        }}
        className={cn(
          "hover:bg-linear-popover-hover m-1 flex p-2 hover:rounded-lg"
        )}
      >
        <CheckCircleIcon className="mr-2 size-5" />
        <span>Done</span>
      </button>
    </PagePopover>
  );
}
