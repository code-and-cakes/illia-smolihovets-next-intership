import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type SidebarProjectListProps = {
  projects: any;
};

export default async function SidebarProjectList(
  props: SidebarProjectListProps
) {
  const router = useRouter();

  const projectList = props.projects?.map((project: any) => {
    return (
      <button
        key={project.project_id}
        className={cn(
          "my-px ml-3 h-7 rounded pl-2 text-left hover:bg-linear-hover-sidebar focus:bg-linear-active"
        )}
        onClick={() => router.push(`/projects/${project.project_id}`)}
      >
        {project.project_name}
      </button>
    );
  });
  return <div className="flex flex-col">{projectList}</div>;
}
