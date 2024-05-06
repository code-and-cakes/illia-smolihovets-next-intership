"use client";

import { AuthHeader } from "@/components/general/auth/AuthHeader";
import AuthModal from "@/components/general/auth/AuthModal";
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
      <AuthModal />
    </AuthModalContextProvider>
  );
}
