import CreateProjectMenu from "@/components/general/app/CreateProjectMenu";
import { getCurrentUser } from "@/supabase/users";

export default async function CreateProjectPage() {
  const userId = await getCurrentUser();

  return <CreateProjectMenu userId={userId} />;
}
