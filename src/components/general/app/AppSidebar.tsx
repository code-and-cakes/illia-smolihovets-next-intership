"use client";

import SidebarProjectList from "@/components/general/app/SidebarProjectList";
import { cn } from "@/lib/utils";
import { userLogout } from "@/supabase/users";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";

export default function AppSidebar() {
  const router = useRouter();

  const logout = async () => {
    await userLogout();
    router.refresh();
  };

  const gerDataUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
    } catch (error) {}
  };

  const checkTestFetch = async () => {
    const { data, error } = await supabase.from("users_data").insert({
      name: "Kateryna",
      surname: "Mozgova",
      user_id: "d465e712-f244-48ba-8fa3-cb10eaf4c07b",
      email: "illiasmolihovets@gmail.com",
    });
    if (data) console.log(data);
    if (error) console.log(error);
  };

  return (
    <aside className={cn("h-screen w-64 text-gray-200")}>
      <nav>
        <div className="flex flex-col items-start p-4 pb-2">
          <div className="mb-8 mt-3">User name</div>
          <button onClick={logout}>Log Out</button>
          <button onClick={gerDataUser}>Get Data User</button>
          <button onClick={checkTestFetch}>Check Test Fetch</button>
          <button
            className={cn(
              "h-7 w-full rounded pl-2 text-left hover:bg-linear-hover-sidebar"
            )}
            onClick={() => console.log("dropdown menu")}
          >
            All Projects
          </button>
          <SidebarProjectList></SidebarProjectList>
          <button
            className={cn(
              "mt-2 h-7 w-full rounded pl-2 text-left hover:bg-linear-hover-sidebar"
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
