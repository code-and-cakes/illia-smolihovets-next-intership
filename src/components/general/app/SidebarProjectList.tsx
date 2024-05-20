import ProjectComponent from "@/components/general/app/ProjectComponent";

type SidebarProjectListProps = {
  projects: any;
  userProjects: any;
};

export default async function SidebarProjectList(
  props: SidebarProjectListProps
) {
  const projectList = props.projects?.map((project: any) => {
    return (
      <ProjectComponent
        projectName={project.project_name}
        key={project.project_id}
        projectId={project.project_id}
      />
    );
  });
  return <>{projectList}</>;
}
