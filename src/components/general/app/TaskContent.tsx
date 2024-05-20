import TaskPage from "@/components/general/app/TaskPage";
import { cn } from "@/lib/utils";
import { getTasksData } from "@/supabase/tasks";

type TaskContentProps = {
  taskId: number;
};

export default async function TaskContent(props: TaskContentProps) {
  const tasksList = await getTasksData();
  const cuttentTask = tasksList!.find((task: any) => {
    return task.id == props.taskId;
  });
  return (
    <TaskPage>
      <div className={cn("bg-linear-todo py-3 pl-5")}>
        {cuttentTask.task_name}
      </div>
      <div className="p-5">{cuttentTask.task_data}</div>
    </TaskPage>
  );
}
