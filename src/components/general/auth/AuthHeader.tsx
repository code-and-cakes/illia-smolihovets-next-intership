"use client";

import { useAuthModalContext } from "@/context/AuthModalContext";
import Link from "next/link";

type AuthHeaderPropsType = {};

export function AuthHeader(props: AuthHeaderPropsType) {
  const { handleOpenLogin, handleOpenSignUp } = useAuthModalContext();
  return (
    <div className="fixed top-0 me-auto ms-auto flex w-full flex-auto justify-around border-b border-gray-700 p-2 backdrop-blur	">
      <Link href="/projects" className="p-1 text-center">
        Linear
      </Link>
      <div>
        <button
          type="button"
          onClick={handleOpenLogin}
          className="h-8 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Log In
        </button>
        <button
          type="button"
          onClick={handleOpenSignUp}
          className="ml-8 h-8 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
