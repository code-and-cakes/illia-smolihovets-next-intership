import ProjectComponent from "@/components/general/app/ProjectComponent";

type SidebarProjectListProps = {
  projects: any;
};

export default async function SidebarProjectList(
  props: SidebarProjectListProps
) {
  // const hardData = useHardDataContext();
  // const { projects, getProjects } = useProjectList();

  // useEffect(() => {
  //   getProjects();
  // });

  // const { data, error } = await supabase.from("projects").select("*");
  // console.log(data);
  // const projectList = hardData.hardDataArray.map((project) => {
  //   return (
  //     <ProjectComponent
  //       projectName={project.projectName}
  //       key={project.projectId}
  //       projectId={project.projectId}
  //     />
  //   );
  // });
  const projectList = props.projects?.map((project: any) => {
    return (
      <ProjectComponent
        projectName={project.project_name}
        key={project.project_id}
        projectId={project.project_id}
      />
    );
  });
  return (
    <>
      {/* <button onClick={getProjects}>Get Projects Data</button> */}
      {projectList}
      {/* {getProjectList} */}
    </>
  );
}
