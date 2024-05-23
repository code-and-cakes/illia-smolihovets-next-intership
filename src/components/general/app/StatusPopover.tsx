import { cn } from "@/lib/utils";
import { updateTaskStatus } from "@/supabase/tasks";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  useClose,
} from "@headlessui/react";
import {
  CheckCircleIcon,
  PlayCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

type StatusPopoverProps = {
  buttonIcon: any;
  taskStatus: string | undefined;
  taskId: number;
};

function StatusList({ taskId }: { taskId: number }) {
  const router = useRouter();
  const statusArray = [
    { status: "ToDo", icon: <PlusCircleIcon className="mr-2 size-5" /> },
    { status: "In Progress", icon: <PlayCircleIcon className="mr-2 size-5" /> },
    { status: "Done", icon: <CheckCircleIcon className="mr-2 size-5" /> },
  ];
  const close = useClose();
  return statusArray.map((statusObj) => {
    return (
      <button
        onClick={async (event) => {
          event.stopPropagation();
          await updateTaskStatus(statusObj.status, taskId);
          close();
          router.refresh();
        }}
        key={`${taskId}${statusObj.status}`}
        className={cn(
          "m-1 flex p-2 hover:rounded-lg hover:bg-linear-popover-hover"
        )}
      >
        {statusObj.icon}
        <span>{statusObj.status}</span>
      </button>
    );
  });
}

export default function StatusPopover(props: StatusPopoverProps) {
  return (
    <Popover className="relative m-1">
      <PopoverButton>{props.buttonIcon}</PopoverButton>
      <PopoverPanel
        className={cn(
          "fixed z-10 ml-1 rounded-md border border-linear-popover-border bg-linear-popover-primary text-white"
        )}
        anchor="right start"
      >
        <div className="flex flex-col">
          <div className={cn("border-b border-linear-popover-border p-2")}>
            Change Status
          </div>
          <StatusList taskId={props.taskId} />
        </div>
      </PopoverPanel>
    </Popover>
  );
}
