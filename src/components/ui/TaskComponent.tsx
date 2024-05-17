import { cn } from "@/lib/utils";

type TaskComponentProps = {
  projectName?: string;
  priority: number;
  status: number;
  description: string;
  createDate: string;
  updateDate: string;
  assignTo?: string;
};

export default function TaskComponent(props: TaskComponentProps) {
  const priorityConverter = (priority: number) => {
    const priorityArray = ["N", "U", "H", "M", "L"];
    // const priorityArray = ["No Priority", "Urgent", "High", "Medium", "Low"];
    return priorityArray[priority];
  };

  const statusConverter = (status: number) => {
    const statusArray = ["B", "T", "I", "D", "C", "d"];
    // const statusArray = ["Backlog", "ToDo","In Progress","Done","Cancelled","Dublicate"];
    return statusArray[status];
  };

  const sidebarChecker = (assignTo: undefined | string) => {
    if (assignTo === undefined) {
      // return <div className="m-1">{props.projectName}</div>;
      return <div className="m-1 mr-5">0</div>;
    } else {
      // return <div className="m-1">{props.assignTo}</div>;
      return <div className="m-1 mr-5">0</div>;
    }
  };

  return (
    <div
      className={cn(" h-9 border border-inherit hover:bg-linear-hover-task")}
    >
      <div className="ml-4 flex flex-row pt-1">
        <input type="checkbox" className="mx-1 w-3"></input>
        <div className="m-1 w-3">{priorityConverter(props.priority)}</div>
        <div className="m-1">{statusConverter(props.status)}</div>
        <div className="m-1 grow">{props.description}</div>
        <div className="m-1 text-gray-400">{props.createDate}</div>
        <div className="m-1 text-gray-400">{props.updateDate}</div>
        {sidebarChecker(props.assignTo)}
        {/* <div className="m-1">{props.assignTo}</div>
      <div className="m-1">{props.projectName}</div> */}
      </div>
    </div>
  );
}
