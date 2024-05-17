import { createSupabaseServerComponentClient } from "@/utils/supabaseAppRouterClient";

export const getTasksData = async () => {
  const supabase = createSupabaseServerComponentClient();
  const { data, error } = await supabase.from("tasks").select("*");
  //   console.log(data);
  return data;
};
