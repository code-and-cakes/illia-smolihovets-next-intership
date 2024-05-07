"use client";

type AppSidebar = {
  changePage: (value: string) => void;
};

export default function AppSidebar(props: AppSidebar) {
  return (
    <aside className="h-screen w-64">
      <nav className="flex h-full flex-col border-r bg-white shadow-sm">
        <div className="flex flex-col items-start justify-between p-4 pb-2">
          <div>Menu</div>
          <button onClick={() => props.changePage("project")}>
            All Projects
          </button>
          <button onClick={() => props.changePage("issues")}>My issues</button>
        </div>
      </nav>
    </aside>
  );
}
