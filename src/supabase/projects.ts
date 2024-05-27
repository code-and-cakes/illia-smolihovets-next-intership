import { Task } from "@/supabase/tasks";
import { User } from "@/supabase/users";
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
