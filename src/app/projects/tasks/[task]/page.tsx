import TaskContent from "@/components/general/app/TaskContent";

export default function Task({ params }: { params: { task: number } }) {
  return <TaskContent taskId={params.task} />;
}
