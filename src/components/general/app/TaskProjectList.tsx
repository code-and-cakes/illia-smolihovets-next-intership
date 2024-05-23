import TaskComponent from "@/components/ui/TaskComponent";
import { cn } from "@/lib/utils";
import React from "react";

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
    props.tasksList?.reduce((acum, task) => {
      if (
        currentProject.project_id === task.assign_to_project_id &&
        task.status === status
      ) {
        acum.push(
          <>
            <TaskComponent
              priority={task.priority}
              description={task.task_name}
              createDate={task.created_at}
              updateDate={task.updated_at}
              UserId={task.assign_to_user_id}
              key={task.id}
              taskId={task.id}
              status={task.status}
            />
          </>
        );
      }
      return acum;
    }, []);

  const projectStatusList = projectStatus.reduce(
    (acum: React.ReactNode[], status) => {
      if (projectTaskList(status).length) {
        acum.push(
          <>
            <div className={cn("bg-linear-todo py-3 pl-5")}>{status}</div>
            {projectTaskList(status)}
          </>
        );
      }
      return acum;
    },
    []
  );

  return projectStatusList;
}
