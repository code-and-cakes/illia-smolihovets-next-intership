import ProjectComponent from "@/components/general/app/ProjectComponent";
import { useHardDataContext } from "@/context/HardDataContext";
import { supabase } from "@/utils/supabase";

export default function SidebarProjectList() {
  const hardData = useHardDataContext();
  const getProjects = async () => {
    try {
      const { data: projects } = await supabase.from("projects").select("*");
      return projects?.map((project) => {
        console.log(project.project_name);
        return (
          <ProjectComponent
            projectName={project.project_name}
            key={project.project_id}
            projectId={project.project_id}
          />
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const projectList = hardData.hardDataArray.map((project) => {
    return (
      <ProjectComponent
        projectName={project.projectName}
        key={project.projectId}
        projectId={project.projectId}
      />
    );
  });
  return (
    <>
      <button onClick={getProjects}>Get Projects Data</button>
      {projectList}
      {/* {getProjects} */}
    </>
  );
}
