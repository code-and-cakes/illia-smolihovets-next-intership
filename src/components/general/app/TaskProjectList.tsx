import TaskComponent from "@/components/ui/TaskComponent";

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
  tasksList: any;
  projectsList: any;
};

export default function TaskProjectList(props: TaskProjectListProps) {
  const currentProject = props.projectsList.find(
    (project) => project.project_id === Number(props.projectId)
  );

  const projectTaskList = props.tasksList.map((task) => {
    if (currentProject.project_name === task.assign_to_project) {
      return (
        <TaskComponent
          priority={task.priority}
          status={task.status}
          description={task.task_name}
          createDate={task.created_at}
          updateDate={task.updated_at}
          assignTo={task.assign_to_user}
          key={task.id}
        />
      );
    }
  });

  return projectTaskList;
}
