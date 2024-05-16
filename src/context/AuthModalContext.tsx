"use client";

import React, { createContext, useContext, useState } from "react";

type ModalActionContextType = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handeAction: () => void;
};

const AuthModalContext = createContext<ModalActionContextType>(
  null as unknown as ModalActionContextType
);

export const AuthModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handeAction = () => {
    console.log("action"); // потом тут пропишем логику входа
  };

  return (
    <AuthModalContext.Provider
      value={{ open, handleOpen, handleClose, handeAction }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export function useAuthModalContext() {
  return useContext(AuthModalContext);
}
