import TaskComponent from "@/components/general/app/TaskComponent";
import { useHardDataContext } from "@/context/HardDataContext";

export default function TaskList() {
  const hardData = useHardDataContext();
  return (
    <>
      {hardData.hardDataArray.map((project) => {
        return (
          <TaskComponent
            projectName={project.projectName}
            priority={project.priority}
            status={project.status}
            description={project.description}
            createDate={project.createDate}
            updateDate={project.updateDate}
            assignTo={project.assignTo}
            key={project.id}
          ></TaskComponent>
        );
      })}
    </>
  );
}
