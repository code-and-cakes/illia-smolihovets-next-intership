import TaskComponent from "@/components/ui/TaskComponent";
import TaskPage from "@/components/ui/TaskPage";

export default function AppIssues() {
  return (
    <TaskPage>
      <div>Issues page</div>
      <TaskComponent></TaskComponent>
      <TaskComponent></TaskComponent>
      <TaskComponent></TaskComponent>
    </TaskPage>
  );
}
