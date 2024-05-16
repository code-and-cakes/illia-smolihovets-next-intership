// export default function Project() {
//   return <AppProject />;

import AppProject from "@/components/general/app/AppProject";

export default function Project({ params }: { params: { projectId: number } }) {
  // console.log(params.project);

  return <AppProject projectId={params.projectId} />;
}
