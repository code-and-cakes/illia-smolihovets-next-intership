"use client";

import AuthModal from "@/components/general/AuthModal";
import { Header } from "@/components/general/Header";
import React, { useState } from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout(props: AuthLayoutProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handeAction = () => {
    console.log("action");
  };
  return (
    <div>
      <Header onAuth={handleOpen} backgroundColor="bg-blue-600" />
      {props.children};
      <AuthModal open={open} onClose={handleClose} onAction={handeAction} />
    </div>
  );
}
