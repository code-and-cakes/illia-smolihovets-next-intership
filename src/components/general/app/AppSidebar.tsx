"use client";

import { useRouter } from "next/navigation";

export default function AppSidebar() {
  const router = useRouter();
  return (
    <aside className="h-screen w-64">
      <nav className="flex h-full flex-col border-r bg-white shadow-sm">
        <div className="flex flex-col items-start justify-between p-4 pb-2">
          <div>Menu</div>
          <button onClick={() => router.push("/menu/project")}>
            All Projects
          </button>
          <button onClick={() => router.push("/menu/issues")}>My issues</button>
        </div>
      </nav>
    </aside>
  );
}
