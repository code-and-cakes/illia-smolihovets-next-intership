import TaskComponent from "@/components/ui/TaskComponent";
import { cn } from "@/lib/utils";
import { Project } from "@/supabase/projects";
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
  projectData: Project;
};

export default function TaskProjectList(props: TaskProjectListProps) {
  const projectStatus = ["ToDo", "In Progress", "Done"];
  // console.log(props.projectData);

  const projectTaskList = (status: string) =>
    props.projectData.tasks.reduce((acum: React.ReactNode[], task: any) => {
      if (task.status === status) {
        acum.push(
          <>
            <TaskComponent
              priority={task.priority}
              description={task.task_name}
              createDate={task.created_at}
              updateDate={task.updated_at}
              userId={task.assign_to_user_id}
              key={task.id}
              taskId={task.id}
              status={task.status}
              assignedUsers={props.projectData.users_data}
              withUsersPopover
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
