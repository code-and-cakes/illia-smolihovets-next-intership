import { Project } from "@/supabase/projects";
import { User } from "@/supabase/users";
import { createSupabaseFrontendClient } from "@/utils/supabase";
import { createSupabaseServerComponentClient } from "@/utils/supabaseAppRouterClient";

export interface Task {
  id: number;
  task_name: string;
  assign_to_project_id: number;
  assign_to_user_id: number;
  priority: number;
  status: string;
  task_data: string;
  created_at: Date;
  updated_at: Date;
  projects: Array<Project>;
  users_data: Array<User>;
}

export const getTaskContent = async (
  taskId: number
): Promise<Task | undefined> => {
  const supabase = createSupabaseServerComponentClient();
  const { data }: { data: Task[] | null } = await supabase
    .from("tasks")
    .select("*, users_data (id, full_name)")
    .eq("id", taskId);
  if (data) return data[0];
};

export const updateTaskStatus = async (
  statusUpdate: string,
  taskId: number
) => {
  const supabase = createSupabaseFrontendClient();
  await supabase
    .from("tasks")
    .update({ status: statusUpdate })
    .eq("id", taskId);
};

export const updateTaskAssignedUser = async (
  userId: number,
  taskId: number
) => {
  const supabase = createSupabaseFrontendClient();
  await supabase
    .from("tasks")
    .update({ assign_to_user_id: userId })
    .eq("id", taskId);
};
