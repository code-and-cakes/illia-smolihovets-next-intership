import { cn } from "@/lib/utils";
import { updateTaskAssignedUser } from "@/supabase/tasks";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  useClose,
} from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

type UsersPopoverProps = {
  assignedUsers: Array<any>;
  userId: number;
  taskId: number;
};

type UserListProps = {
  assignedUsers: Array<any>;
  onChange: (userId: number) => void;
  assignedUserId: number;
};

const UsersList = ({
  assignedUsers,
  onChange,
  assignedUserId,
}: UserListProps) => {
  const close = useClose();
  const router = useRouter();

  const handleClick = async (userId: number) => {
    await onChange(userId);
    close();
    router.refresh();
  };

  return assignedUsers.map((user) => {
    const isActive = assignedUserId === user.id;
    return (
      <button
        onClick={() => handleClick(user.id)}
        key={user.id}
        className={cn(
          isActive && "bg-linear-popover-active rounded-lg ",
          "m-1 flex p-2 hover:rounded-lg hover:bg-linear-popover-hover"
        )}
      >
        <span>{user.full_name}</span>
      </button>
    );
  });
};

export default async function UsersPopover(props: UsersPopoverProps) {
  const assignedUser = props.assignedUsers.find((user) => {
    return user.id == props.userId;
  });

  return (
    <Popover className="relative m-1">
      <PopoverButton>
        <UserCircleIcon className="size-5" />
      </PopoverButton>
      <PopoverPanel
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={cn(
          "fixed z-10 ml-1 rounded-md border border-linear-popover-border bg-linear-popover-primary text-white"
        )}
        anchor="right start"
      >
        <div className="flex flex-col">
          <div className={cn("border-b border-linear-popover-border p-2")}>
            Assigned To
          </div>
          <UsersList
            assignedUserId={assignedUser.id}
            assignedUsers={props.assignedUsers}
            onChange={async (userId: number) => {
              await updateTaskAssignedUser(userId, props.taskId);
            }}
          />
        </div>
      </PopoverPanel>
    </Popover>
  );
}
