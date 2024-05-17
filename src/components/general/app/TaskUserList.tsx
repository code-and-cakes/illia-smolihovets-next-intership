import TaskComponent from "@/components/ui/TaskComponent";

type TaskUserListProps = {
  userName: string;
  tasksList: any;
};

export default function TaskUserList(props: TaskUserListProps) {
  const userTaskList = props.tasksList.map((task) => {
    if (task.assign_to_user == props.userName) {
      return (
        <TaskComponent
          projectName={task.assign_to_project}
          priority={task.priority}
          status={task.status}
          description={task.task_name}
          createDate={task.created_at}
          updateDate={task.updated_at}
          key={`task:${task.id}`}
        ></TaskComponent>
      );
    }
  });

  return userTaskList;
}
