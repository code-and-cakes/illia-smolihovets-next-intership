import { createSupabaseServerComponentClient } from "@/utils/supabaseAppRouterClient";

export const getProjectsData = async () => {
  const supabase = createSupabaseServerComponentClient();
  const { data, error } = await supabase.from("projects").select("*");
  // console.log(data);
  return data;
};
