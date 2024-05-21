"use client";

import { cn } from "@/lib/utils";
import {
  CheckCircleIcon,
  PlayCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

type TaskComponentProps = {
  projectName?: string;
  priority: number;
  status?: string;
  description: string;
  createDate: string;
  updateDate: string;
  assignTo?: string;
  taskId: number;
};

export default function TaskComponent(props: TaskComponentProps) {
  const priorityConverter = (priority: number) => {
    const priorityArray = ["N", "U", "H", "M", "L"];
    // const priorityArray = ["No Priority", "Urgent", "High", "Medium", "Low"];
    return priorityArray[priority];
  };

  const statusConverter = (status: string) => {
    if (status === "ToDo") {
      return <PlusCircleIcon className="size-5" />;
    } else if (status === "In Progress") {
      return <PlayCircleIcon className="size-5" />;
    } else if (status === "Done") {
      return <CheckCircleIcon className="size-5" />;
    }
  };

  const dateConverter = (date: string) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const regexpDate = date.match(/\d{4}-(0(\d)|\d{2})-(\d{2})/);
    const convertedMonth =
      monthNames[Number(regexpDate![2]) - 1] ||
      monthNames[Number(regexpDate![1]) - 1];
    // console.log(new Date(date));
    const convertedDay = regexpDate![3];
    const convertedDate = `${convertedDay} ${convertedMonth}`;
    return convertedDate;
  };

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/projects/tasks/${props.taskId}`)}
      className={cn(" h-9 border border-inherit hover:bg-linear-hover-task")}
    >
      <div className="ml-4 flex flex-row pt-1">
        {/* <input type="checkbox" className="mx-1 w-3"></input> */}
        {/* <div className="m-1 w-3">{priorityConverter(props.priority)}</div> */}
        <div className="m-1">{statusConverter(props.status)}</div>
        <div className="m-1 grow">{props.description}</div>
        <div className="m-1 flex items-center justify-center text-xs text-gray-500">
          {dateConverter(props.createDate)}
        </div>
        <div className="m-1 flex items-center justify-center text-xs text-gray-500">
          {dateConverter(props.updateDate)}
        </div>
        <div className="m-1">{props.assignTo}</div>
      </div>
    </div>
  );
}
