"use client";

import React, { createContext, useContext, useState } from "react";

type ModalActionContextType = {
  openLogin: boolean;
  openSignUp: boolean;
  handleOpenLogin: () => void;
  handleCloseLogin: () => void;
  handeActionLogin: () => void;
  handleOpenSignUp: () => void;
  handleCloseSignUp: () => void;
  handeActionSignUp: () => void;
};

const AuthModalContext = createContext<ModalActionContextType>(
  null as unknown as ModalActionContextType
);

export const AuthModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handeActionLogin = () => {
    console.log("action");
  };

  const [openSignUp, setOpenSignUp] = useState(false);

  const handleOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };

  const handeActionSignUp = () => {
    console.log("action");
  };

  return (
    <AuthModalContext.Provider
      value={{
        openLogin,
        handleOpenLogin,
        handleCloseLogin,
        handeActionLogin,
        openSignUp,
        handleOpenSignUp,
        handleCloseSignUp,
        handeActionSignUp,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export function useAuthModalContext() {
  return useContext(AuthModalContext);
}
