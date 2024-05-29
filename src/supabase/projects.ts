import { Task } from "@/supabase/tasks";
import { User } from "@/supabase/users";
import { createSupabaseFrontendClient } from "@/utils/supabase";
import { createSupabaseServerComponentClient } from "@/utils/supabaseAppRouterClient";

export interface Project {
  project_id: number;
  project_name: string;
  created_at: Date;
  users_data: Array<User>;
  tasks: Array<Task>;
}

export const getProjectDataById = async (
  projectId: number
): Promise<Project | undefined> => {
  const supabase = createSupabaseServerComponentClient();
  const { data }: { data: Project[] | null } = await supabase
    .from("projects")
    .select("*, tasks(*), users_data(full_name, id)")
    .eq("project_id", projectId);
  // console.log(data[0].users_data);
  if (data) return data[0];
};

export const updateProjectName = async (
  projectName: string,
  projectId: number
) => {
  const supabase = createSupabaseFrontendClient();
  const { data } = await supabase
    .from("projects")
    .update({ project_name: projectName })
    .eq("project_id", projectId);
};

export const assignUserToProject = async (
  projectId: number,
  userId: number
) => {
  const supabase = createSupabaseFrontendClient();
  const { data } = await supabase
    .from("users_projects")
    .insert([{ project_id: projectId, user_id: userId }])
    .select();
  console.log(data);
};

export const unassignUserToProject = async (
  projectId: number,
  userId: number
) => {
  const supabase = createSupabaseFrontendClient();
  const { data } = await supabase
    .from("users_projects")
    .delete()
    .eq("project_id", projectId)
    .eq("user_id", userId);
  console.log(data);
};

export const createProject = async (userId: number, projectName: string) => {
  const supabase = createSupabaseFrontendClient();
  const { data } = await supabase
    .from("projects")
    .insert([{ project_name: projectName }])
    .select();
  console.log(data);
  await supabase
    .from("users_projects")
    .insert([{ project_id: data![0].project_id, user_id: userId }]);
};
