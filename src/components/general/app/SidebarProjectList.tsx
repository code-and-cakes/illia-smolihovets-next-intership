import ProjectComponent from "@/components/general/app/ProjectComponent";
import { useHardDataContext } from "@/context/HardDataContext";

export default function SidebarProjectList() {
  const hardData = useHardDataContext();
  const projectList = hardData.hardDataArray.map((project) => {
    return (
      <ProjectComponent
        projectName={project.projectName}
        key={project.projectId}
        projectId={project.projectId}
      />
    );
  });
  return projectList;
}
