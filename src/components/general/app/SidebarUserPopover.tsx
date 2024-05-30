import { cn } from "@/lib/utils";
import { userLogout } from "@/supabase/users";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function SidebarUserPopover({ fullName }: { fullName: string }) {
  const router = useRouter();
  const logout = async () => {
    await userLogout();
    router.replace("/auth");
  };

  return (
    <Popover>
      <PopoverButton className="z-30 mb-8 mt-1 flex flex-row items-center rounded px-2 py-1 hover:bg-linear-hover-sidebar">
        <div className="pr-3 text-sm">{fullName}</div>
        <ChevronDownIcon className="size-3" />
      </PopoverButton>
      <PopoverPanel
        className={cn(
          "mt-2 flex flex-col rounded-md border border-linear-popover-border bg-linear-popover-primary text-white"
        )}
        anchor="bottom end"
      >
        <button
          className={cn("border-b border-linear-popover-border p-1")}
          onClick={() => router.push(`/projects/create_project`)}
        >
          <span className="flex p-2 hover:rounded-lg hover:bg-linear-popover-hover">
            Create new project
          </span>
        </button>
        <button onClick={logout} className="p-1">
          <span className="flex p-2 hover:rounded-lg hover:bg-linear-popover-hover">
            Log Out
          </span>
        </button>
      </PopoverPanel>
    </Popover>
  );
}
