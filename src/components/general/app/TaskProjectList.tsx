import TaskComponent from "@/components/ui/TaskComponent";
import { useHardDataContext } from "@/context/HardDataContext";

export default function TaskProjectList({ projectId }: { projectId: number }) {
  const hardData = useHardDataContext();

  const project = hardData.hardDataArray.find(
    (project) => project.projectId === Number(projectId)
  );

  const projectTaskList = project?.projectData.map((project) => {
    return (
      <TaskComponent
        priority={project.priority}
        status={project.status}
        description={project.description}
        createDate={project.createDate}
        updateDate={project.updateDate}
        assignTo={project.assignTo}
        key={project.taskId}
      />
    );
  });

  return projectTaskList;
}
