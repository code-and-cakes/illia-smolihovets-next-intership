import AppSidebar from "@/components/general/app/AppSidebar";
import { getProjectsData } from "@/supabase/projects";
import { getUserData } from "@/supabase/users";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default async function AppLayout(props: AppLayoutProps) {
  const projects = await getProjectsData();
  const currentUser = await getUserData();
  return (
    <div className="flex h-screen">
      <AppSidebar currentUser={currentUser} projects={projects} />
      {props.children}
    </div>
  );
}
