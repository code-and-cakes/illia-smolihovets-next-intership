import ProjectMenu from "@/components/general/app/ProjectMenu";
import { getProjectDataById } from "@/supabase/projects";
import { getUsersNames } from "@/supabase/users";

export default async function EditMenu({
  params,
}: {
  params: { project: number };
}) {
  const projectData = await getProjectDataById(params.project);
  const userList = await getUsersNames();

  return <ProjectMenu projectData={projectData} userList={userList} />;
}
