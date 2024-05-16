"use client";

import SidebarProjectList from "@/components/general/app/SidebarProjectList";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function AppSidebar() {
  const router = useRouter();
  return (
    <aside className={cn("h-screen w-64 text-gray-200")}>
      <nav>
        <div className="flex flex-col items-start p-4 pb-2">
          <div className="mb-8 mt-3">User name</div>
          <button
            className={cn(
              "hover:bg-linear-hover-sidebar h-7 w-full rounded pl-2 text-left"
            )}
            onClick={() => console.log("dropdown menu")}
          >
            All Projects
          </button>
          <SidebarProjectList></SidebarProjectList>
          <button
            className={cn(
              "hover:bg-linear-hover-sidebar mt-2 h-7 w-full rounded pl-2 text-left"
            )}
            onClick={() => router.push("/menu/issues")}
          >
            My issues
          </button>
        </div>
      </nav>
    </aside>
  );
}
