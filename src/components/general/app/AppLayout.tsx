import AppSidebar from "@/components/general/app/AppSidebar";
import { getProjectsData } from "@/supabase/projects";
import {
  getUserData,
  getUserProjectsData,
  getUsersNames,
} from "@/supabase/users";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default async function AppLayout(props: AppLayoutProps) {
  const projectsList = await getProjectsData();
  const currentUser = await getUserData();
  const userProjects = await getUserProjectsData();
  const users = await getUsersNames();

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
