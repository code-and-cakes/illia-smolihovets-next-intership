"use client";

import { AuthHeader } from "@/components/general/auth/AuthHeader";
import LogInModal from "@/components/general/auth/LogInModal";
import SignUpModal from "@/components/general/auth/SignUpModal";
import { AuthModalContextProvider } from "@/context/AuthModalContext";
import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout(props: AuthLayoutProps) {
  return (
    <AuthModalContextProvider>
      <AuthHeader />
      {props.children}
      <LogInModal />
      <SignUpModal />
    </AuthModalContextProvider>
  );
}
