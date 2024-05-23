import { createSupabaseServerComponentClient } from "@/utils/supabaseAppRouterClient";

export const getProjectsData = async () => {
  const supabase = createSupabaseServerComponentClient();
  const { data, error } = await supabase.from("projects").select("*");
  // console.log(data);
  return data;
};

export const getProjectDataById = async () => {
  const supabase = createSupabaseServerComponentClient();
  const { data } = await supabase
    .from("projects")
    .select("*, tasks(task_name)")
    .eq("project_id", 1);
  // console.log(data);
};
