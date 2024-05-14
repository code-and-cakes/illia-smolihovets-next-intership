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

  const getDataUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user?.id);
      const { data: users_data } = await supabase
        .from("users_data")
        .select("*")
        .eq("user_id", user?.id);
      // const currentUser = users_data?.find(
      //   (userData) => userData.user_id === user?.id
      // );
      console.log(users_data![0]);
    } catch (error) {}
  };

  const getUserInfo = async () => {
    try {
      const { data: users_data, error } = await supabase
        .from("users_data")
        .select("*");
      console.log(users_data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className={cn("h-screen w-64 text-gray-200")}>
      <nav>
        <div className="flex flex-col items-start p-4 pb-2">
          <div className="mb-8 mt-3">User name</div>
          <button onClick={logout}>Log Out</button>
          <button onClick={getDataUser}>Get Data User</button>
          <button onClick={getUserInfo}>Get All Users Info</button>
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
