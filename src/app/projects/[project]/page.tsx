import AppProject from "@/components/general/app/AppProject";

export default function Project({ params }: { params: { project: number } }) {
  // console.log(params.project);

  return <AppProject projectId={params.project} />;
}
