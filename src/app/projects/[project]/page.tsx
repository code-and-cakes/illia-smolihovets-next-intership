import AppProject from "@/components/general/app/AppProject";
import { getProjectDataById } from "@/supabase/projects";

export default await async function Project({
  params,
}: {
  params: { project: number };
}) {
  const projectData = await getProjectDataById(params.project);

  return <AppProject projectData={projectData} />;
};
