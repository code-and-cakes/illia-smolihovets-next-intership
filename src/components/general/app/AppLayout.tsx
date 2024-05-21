import AppSidebar from "@/components/general/app/AppSidebar";
import { getProjectsData } from "@/supabase/projects";
import { getUserData, getUserProjectsData } from "@/supabase/users";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default async function AppLayout(props: AppLayoutProps) {
  const projectsList = await getProjectsData();
  const currentUser = await getUserData();
  const userProjects = await getUserProjectsData();
  // console.log(userProjects![0]);
  return (
    <div className="flex h-screen">
      <AppSidebar
        userProjects={userProjects}
        currentUser={currentUser}
        projects={userProjects}
      />
      {props.children}
    </div>
  );
}
