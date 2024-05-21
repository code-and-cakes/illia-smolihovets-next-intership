import TaskComponent from "@/components/ui/TaskComponent";
import { cn } from "@/lib/utils";

type TaskUserListProps = {
  userName: string;
  tasksList: any;
  userProjects: any;
};

export default function TaskUserList(props: TaskUserListProps) {
  const userTasksList = (projectName: any) => {
    return props.tasksList.map((task: any) => {
      if (
        task.assign_to_user == props.userName &&
        task.assign_to_project == projectName
      ) {
        return (
          <TaskComponent
            projectName={task.assign_to_project}
            priority={task.priority}
            status={task.status}
            description={task.task_name}
            createDate={task.created_at}
            updateDate={task.updated_at}
            key={`task:${task.id}`}
            taskId={task.id}
          ></TaskComponent>
        );
      }
    });
  };

  const projectsBar = props.userProjects.map((project: any) => {
    return (
      <>
        <div
          key={project.project_id}
          className={cn("bg-linear-todo py-3 pl-5")}
        >
          {project.project_name}
        </div>
        {userTasksList(project.project_name)}
      </>
    );
  });

  return projectsBar;
}
