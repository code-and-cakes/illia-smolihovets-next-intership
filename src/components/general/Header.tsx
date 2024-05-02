import { cn } from "@/lib/utils";
import Link from "next/link";

type HeaderPropsType = {
  backgroundColor?: string;
  height?: string;
};

export function Header({ backgroundColor = "" }: HeaderPropsType) {
  return (
    <div
      className={cn(
        `${backgroundColor} mx-8 flex flex-auto border-2 border-solid`
      )}
    >
      <div className="grow bg-green-400">Linear</div>
      <Link href="/dashboard" className="grow bg-cyan-800">
        Dashboard
      </Link>
      <div className="grow">Plug</div>
      <div className="grow">Plug</div>
      <div className="grow">Plug</div>
      <div className="grow">Plug</div>
      <div className="grow">Plug</div>
      <div className="grow">Plug</div>
      <div className="grow">Log In</div>
      <div className="grow">Sign Up</div>
    </div>
  );
}
