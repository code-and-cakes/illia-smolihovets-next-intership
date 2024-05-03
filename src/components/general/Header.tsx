"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type HeaderPropsType = {
  backgroundColor?: string;
  height?: string;
  onAuth: () => void;
};

export function Header(props: HeaderPropsType) {
  return (
    <div
      className={cn(
        `${props.backgroundColor} mx-8 flex flex-auto border-2 border-solid`
      )}
    >
      <Link href="/" className="grow bg-green-400">
        Linear
      </Link>
      <Link href="/dashboard" className="grow bg-cyan-800">
        Dashboard
      </Link>
      <div className="grow">Plug</div>
      <div className="grow">Plug</div>
      <div className="grow">Plug</div>
      <div className="grow">Plug</div>
      <div className="grow">Plug</div>
      <div className="grow">Plug</div>
      <button
        type="button"
        onClick={props.onAuth}
        className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        Log In
      </button>
    </div>
  );
}
