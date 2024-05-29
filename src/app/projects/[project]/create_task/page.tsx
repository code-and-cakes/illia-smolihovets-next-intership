import CreateTaskMenu from "@/components/general/app/CreateTaskMenu";
import { getProjectDataById } from "@/supabase/projects";
import { getCurrentUser } from "@/supabase/users";

export default async function TaskMenu({
  params,
}: {
  params: { project: number };
}) {
  const projectData = await getProjectDataById(params.project);
  const userId = await getCurrentUser();

  return (
    <CreateTaskMenu
      projectName={projectData?.project_name}
      projectId={projectData?.project_id}
      userId={userId}
    />
  );
}
