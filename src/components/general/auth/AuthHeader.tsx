"use client";

import { useAuthModalContext } from "@/context/AuthModalContext";
import Link from "next/link";

type AuthHeaderPropsType = {};

export function AuthHeader(props: AuthHeaderPropsType) {
  const { handleOpen } = useAuthModalContext();
  return (
    //#272940
    <div className="me-auto ms-auto flex flex-auto justify-around border-b border-gray-700 p-2">
      <Link href="/" className="p-1 text-center">
        Linear
      </Link>
      <button
        type="button"
        onClick={handleOpen}
        className="h-8 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        Log In
      </button>
    </div>
  );
}
