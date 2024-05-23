import { cn } from "@/lib/utils";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

type UsersPopoverProps = {};

export default function UsersPopover() {
  return (
    <Popover className="relative m-1">
      <PopoverButton>
        <UserCircleIcon className="size-5" />
      </PopoverButton>
      <PopoverPanel
        className={cn(
          "fixed z-10 ml-1 rounded-md border border-linear-popover-border bg-linear-popover-primary text-white"
        )}
        anchor="right start"
      >
        <div className="flex flex-col">
          <div className={cn("border-b border-linear-popover-border p-2")}>
            Change Status
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
