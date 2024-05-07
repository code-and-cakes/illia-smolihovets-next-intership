"use client";

import AppIssues from "@/components/general/app/AppIssues";
import AppProject from "@/components/general/app/AppProject";
import AppSidebar from "@/components/general/app/AppSidebar";
import React, { useState } from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout(props: AppLayoutProps) {
  const [option, setOption] = useState("project");

  const changePage = (value: string) => {
    setOption(value);
  };

  const pageSwitcher = (value: string) => {
    switch (value) {
      case "project":
        return <AppProject></AppProject>;
      case "issues":
        return <AppIssues></AppIssues>;
    }
  };

  return (
    <div className="flex h-screen flex-row">
      <AppSidebar changePage={changePage}></AppSidebar>
      {pageSwitcher(option)}
    </div>
  );
}
