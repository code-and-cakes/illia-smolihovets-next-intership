import { createSupabaseFrontendClient } from "@/utils/supabase";
import { createSupabaseServerComponentClient } from "@/utils/supabaseAppRouterClient";

export const getTasksData = async () => {
  const supabase = createSupabaseServerComponentClient();
  const { data, error } = await supabase
    .from("tasks")
    .select("*, users_data (id, full_name)");
  // console.log(data);
  return data;
};

export const updateTaskStatus = async (
  statusUpdate: string | undefined,
  taskId: number
) => {
  const supabase = createSupabaseFrontendClient();
  console.log(`user update status: ${statusUpdate}. and task id: ${taskId}`);
  await supabase
    .from("tasks")
    .update({ status: statusUpdate })
    .eq("id", taskId);
};
