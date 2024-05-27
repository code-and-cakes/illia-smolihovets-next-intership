import TaskContent from "@/components/general/app/TaskContent";
import { getTaskContent } from "@/supabase/tasks";

export default async function Task({ params }: { params: { task: number } }) {
  const taskContent = await getTaskContent(params.task);

  return <TaskContent taskId={params.task} taskContent={taskContent} />;
}
