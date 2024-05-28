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
  taskStatus: string;
  taskId: number;
};

type StatusListProps = {
  taskId: number;
  status: string;
  onChange: (status: string) => void;
};

function StatusList({ taskId, onChange, status }: StatusListProps) {
  const statusArray = [
    { status: "ToDo", icon: <PlusCircleIcon className="mr-2 size-5" /> },
    { status: "In Progress", icon: <PlayCircleIcon className="mr-2 size-5" /> },
    { status: "Done", icon: <CheckCircleIcon className="mr-2 size-5" /> },
  ];

  const router = useRouter();
  const close = useClose();

  const handleClick = async (status: string) => {
    await onChange(status);
    close();
    router.refresh();
  };

  return statusArray.map((statusObj) => {
    const isActive = statusObj.status === status;
    return (
      <button
        onClick={async () => {
          handleClick(statusObj.status);
        }}
        key={`${taskId}${statusObj.status}`}
        className={cn(
          isActive && "rounded-lg bg-linear-popover-active",
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
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={cn(
          "fixed z-10 ml-1 rounded-md border border-linear-popover-border bg-linear-popover-primary text-white"
        )}
        anchor="right start"
      >
        <div className="flex flex-col">
          <div className={cn("border-b border-linear-popover-border p-2")}>
            Change Status
          </div>
          <StatusList
            onChange={async (status) => updateTaskStatus(status, props.taskId)}
            taskId={props.taskId}
            status={props.taskStatus}
          />
        </div>
      </PopoverPanel>
    </Popover>
  );
}
