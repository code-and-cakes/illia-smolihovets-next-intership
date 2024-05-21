import { cn } from "@/lib/utils";
import { Popover } from "@headlessui/react";
import React from "react";

type PopoverProps = {
  children: React.ReactNode;
  buttonIcon: any;
};

export default function PagePopover(props: PopoverProps) {
  return (
    <Popover className="relative m-1">
      <Popover.Button>{props.buttonIcon}</Popover.Button>
      <Popover.Panel
        className={cn(
          "bg-linear-popover-primary border-linear-popover-border fixed z-10 flex flex-col rounded-md border"
        )}
      >
        {props.children}
      </Popover.Panel>
    </Popover>
  );
}
