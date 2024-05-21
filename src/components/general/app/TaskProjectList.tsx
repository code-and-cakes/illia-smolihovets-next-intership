import TaskComponent from "@/components/ui/TaskComponent";
import { cn } from "@/lib/utils";

type TaskDataProps = {
  id: number;
  priority: number;
  status: number;
  taskName: string;
  createDate: Date;
  updateDate: Date;
  assignToUser: string;
  assigToProject: string;
  key: number;
  taskData: any;
};

// type TaskProjectListProps = {
//   projectId: number;
//   taskProjectList: Array<TaskDataProps>;
// };

type TaskProjectListProps = {
  projectId: number;
  tasksList: Array<any> | null;
  projectsList: Array<any> | null;
};

export default function TaskProjectList(props: TaskProjectListProps) {
  const currentProject = props.projectsList?.find(
    (project) => project.project_id === Number(props.projectId)
  );

  const projectStatus = ["ToDo", "In Progress", "Done"];

  const projectTaskList = (status: string) =>
    props.tasksList?.map((task) => {
      if (
        currentProject.project_name === task.assign_to_project &&
        task.status === status
      ) {
        return (
          <>
            <TaskComponent
              priority={task.priority}
              description={task.task_name}
              createDate={task.created_at}
              updateDate={task.updated_at}
              assignTo={task.assign_to_user}
              key={task.id}
              taskId={task.id}
              status={task.status}
            />
          </>
        );
      }
    });

  const projectStatusList = projectStatus.map((status) => {
    return (
      <>
        <div className={cn("bg-linear-todo py-3 pl-5")}>{status}</div>
        {projectTaskList(status)}
      </>
    );
  });

  return projectStatusList;
}
