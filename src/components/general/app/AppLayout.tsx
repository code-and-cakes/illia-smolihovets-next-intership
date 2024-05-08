"use client";

import AppSidebar from "@/components/general/app/AppSidebar";
import { HardDataContextProvider } from "@/context/HardDataContext";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout(props: AppLayoutProps) {
  return (
    <HardDataContextProvider>
      <div className="flex h-screen">
        <AppSidebar></AppSidebar>
        {props.children}
      </div>
    </HardDataContextProvider>
  );
}
