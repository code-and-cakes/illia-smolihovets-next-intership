import AppSidebar from "@/components/general/app/AppSidebar";
import { getProjectsData } from "@/supabase/projects";
import { getUserData } from "@/supabase/users";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default async function AppLayout(props: AppLayoutProps) {
  const projectsList = await getProjectsData();
  const currentUser = await getUserData();
  // const tasksList = await getTasksData();
  return (
    <div className="flex h-screen">
      <AppSidebar currentUser={currentUser} projects={projectsList} />
      {props.children}
    </div>
  );
}
