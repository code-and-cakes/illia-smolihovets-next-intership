"use client";

import SidebarProjectList from "@/components/general/app/SidebarProjectList";
import { cn } from "@/lib/utils";
import { userLogout } from "@/supabase/users";
import { useRouter } from "next/navigation";

type AppSidebarProps = {
  projects: any;
  currentUser: any;
};

export default function AppSidebar(props: AppSidebarProps) {
  const router = useRouter();

  const logout = async () => {
    await userLogout();
    router.refresh();
  };

  return (
    <aside className={cn("h-screen w-64 text-gray-200")}>
      <nav>
        <div className="flex flex-col items-start p-4 pb-2">
          <div className="mb-8 mt-3">{props.currentUser.full_name}</div>
          <button onClick={logout}>Log Out</button>
          <button
            className={cn(
              "h-7 w-full rounded pl-2 text-left hover:bg-linear-hover-sidebar"
            )}
            // onClick={() => console.log("dropdown menu")}
          >
            All Projects
          </button>
          <SidebarProjectList projects={props.projects} />
          <button
            className={cn(
              "mt-2 h-7 w-full rounded pl-2 text-left hover:bg-linear-hover-sidebar"
            )}
            onClick={() => router.push("/menu/tasks")}
          >
            My issues
          </button>
        </div>
      </nav>
    </aside>
  );
}
