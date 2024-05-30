"use client";

import ComoboxProjects from "@/components/general/app/ComoboxProjects";
import SidebarUserPopover from "@/components/general/app/SidebarUserPopover";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type AppSidebarProps = {
  userProjectsData: any;
};

export default function AppSidebar(props: AppSidebarProps) {
  const router = useRouter();

  return (
    <aside className={cn("h-screen w-64 text-gray-200")}>
      <nav>
        <div className="flex flex-col items-start p-2">
          <SidebarUserPopover fullName={props.userProjectsData.full_name} />
          <ComoboxProjects projects={props.userProjectsData.projects} />
          {/* <SidebarProjectList projects={props.userProjectsData.projects} /> */}
          <button
            className={cn(
              "mt-2 h-7 w-full rounded pl-2 text-left hover:bg-linear-hover-sidebar focus:bg-linear-active"
            )}
            onClick={() => router.push("/projects/tasks")}
          >
            My tasks
          </button>
        </div>
      </nav>
    </aside>
  );
}
