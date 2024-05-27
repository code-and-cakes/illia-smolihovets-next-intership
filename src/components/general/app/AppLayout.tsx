import AppSidebar from "@/components/general/app/AppSidebar";
import { GetUserProjectsData } from "@/supabase/users";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default async function AppLayout(props: AppLayoutProps) {
  const userProjectsData = await GetUserProjectsData();

  return (
    <div className="flex h-screen">
      <AppSidebar userProjectsData={userProjectsData} />
      {props.children}
    </div>
  );
}
