import TaskComponent from "@/components/ui/TaskComponent";
import { useHardDataContext } from "@/context/HardDataContext";

type TaskUserIssuesList = {
  userName: string;
};

export default function TaskUserList(props: TaskUserIssuesList) {
  const hardData = useHardDataContext();
  const userTaskList = hardData.hardDataArray.map((project) => {
    const projectArray = project.projectData.map((taskData) => {
      if (taskData.assignTo == props.userName) {
        return (
          <TaskComponent
            projectName={project.projectName}
            priority={taskData.priority}
            status={taskData.status}
            description={taskData.description}
            createDate={taskData.createDate}
            updateDate={taskData.updateDate}
            key={`project:${project.projectId}task:${taskData.taskId}`}
          ></TaskComponent>
        );
      }
    });
    return projectArray;
  });

  return userTaskList;
}
