import TaskComponent from "@/components/ui/TaskComponent";
import { cn } from "@/lib/utils";

type TaskUserListProps = {
  userProjectsData: any;
  userTasksData: any;
};

export default function TaskUserList(props: TaskUserListProps) {
  const userTasksList = (projectId) => {
    return props.userTasksData.tasks.map((task: any) => {
      if (projectId === task.assign_to_project_id) {
        return (
          <TaskComponent
            UserId={task.assign_to_user_id}
            projectId={task.assign_to_project_id}
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

  const projectsBar = props.userProjectsData.projects.map((project: any) => {
    return (
      <>
        <div
          key={project.project_id}
          className={cn("bg-linear-todo py-3 pl-5")}
        >
          {project.project_name}
        </div>
        {userTasksList(project.project_id)}
      </>
    );
  });

  return projectsBar;
}
