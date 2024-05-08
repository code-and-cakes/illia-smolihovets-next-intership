type TaskComponentProps = {
  projectName?: string;
  priority: number;
  status: number;
  description: string;
  createDate: string;
  updateDate: string;
  assignTo?: string;
};

// Компоненты у нас будут немного отличаться в зависимости открыты у нас проекты либо ишшьюс. Как правильно реализовать эту логику?

export default function TaskComponent(props: TaskComponentProps) {
  const priorityConverter = (priority: number) => {
    const priorityArray = ["No Priority", "Urgent", "High", "Medium", "Low"];
    return priorityArray[priority];
  };

  const statusConverter = (status: number) => {
    const statusArray = [
      "Backlog",
      "ToDo",
      "In Progress",
      "Done",
      "Cancelled",
      "Dublicate",
    ];
    return statusArray[status];
  };

  return (
    <div className="flex min-w-full flex-row border-2 border-black">
      <input type="checkbox" className="m-1"></input>
      <div className="m-1">{priorityConverter(props.priority)}</div>
      <div className="m-1">{statusConverter(props.status)}</div>
      <div className="m-1">{props.description}</div>
      <div className="m-1">{props.createDate}</div>
      <div className="m-1">{props.updateDate}</div>
      <div className="m-1">{props.assignTo}</div>
      <div className="m-1">{props.projectName}</div>
    </div>
  );
}
