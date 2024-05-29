"use client";

import TaskPage from "@/components/general/app/TaskPage";
import { cn } from "@/lib/utils";
import {
  assignUserToProject,
  unassignUserToProject,
  updateProjectName,
} from "@/supabase/projects";
import { User } from "@/supabase/users";
import { UserMinusIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProjectInput {
  projectName: string;
}

type ProjectMenuProps = {
  userList: any;
  projectData: any;
};

type UserListProps = {
  userList: Array<User>;
  assignedUsers: Array<User>;
  projectId: number;
};

const UserList = ({ userList, assignedUsers, projectId }: UserListProps) => {
  const router = useRouter();

  console.log(projectId);

  const updateAssignUser = async (isAssigned: boolean, userId: number) => {
    if (isAssigned) {
      await assignUserToProject(projectId, userId);
      router.refresh();
    } else {
      await unassignUserToProject(projectId, userId);
      router.refresh();
    }
  };

  const toggleAssign = (userId: number) => {
    const result = assignedUsers.find((assignedUser) => {
      return assignedUser.id === userId;
    });
    if (result)
      return (
        <button
          onClick={() => {
            updateAssignUser(false, userId);
          }}
        >
          <UserMinusIcon className="size-5" />
        </button>
      );
    else
      return (
        <button
          onClick={() => {
            updateAssignUser(true, userId);
          }}
        >
          <UserPlusIcon className="size-5" />
        </button>
      );
  };

  return userList.map((user) => {
    return (
      <div key={user.id} className="flex flex-row">
        {toggleAssign(user.id)}
        <div className="mb-1 pl-2 pt-2">{user.full_name}</div>
      </div>
    );
  });
};

export default function ProjectMenu(props: ProjectMenuProps) {
  const router = useRouter();

  const { register, handleSubmit } = useForm<IProjectInput>();
  const onSubmit: SubmitHandler<IProjectInput> = async (data) => {
    await updateProjectName(data.projectName, props.projectData.project_id);
    // console.log(data.projectName);
    router.refresh();
  };

  // console.log(props.projectData);

  return (
    <TaskPage>
      <div className="m-auto mt-16 flex w-8/12 flex-1 flex-col overflow-y-auto text-white scrollbar scrollbar-thumb-linear-scrollbar scrollbar-w-1">
        <div className="flex flex-col border-b border-linear-border pb-5 ">
          <span className="text-3xl">Settings</span>
          <span className=" text-gray-400">Manage your project settings.</span>
        </div>
        <form
          className="my-6 flex flex-col border-b border-linear-border pb-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5 text-lg">General</div>
          <div className="mb-2">Project Name</div>
          <input
            className={cn(
              "mb-7 w-fit rounded border border-linear-popover-border bg-inherit p-1 outline-none focus:border-linear-button"
            )}
            placeholder={props.projectData.project_name}
            {...register("projectName")}
          ></input>
          <button
            type="submit"
            className={cn(
              "bg-linear-button-primary w-fit rounded p-1 px-3 text-start"
            )}
          >
            Update
          </button>
        </form>
        <div>
          <div className="border-b border-linear-border pb-5">
            <div className="mb-3 text-lg">Manage members</div>
            <div className="mb-2">All members: </div>
            <UserList
              userList={props.userList}
              assignedUsers={props.projectData.users_data}
              projectId={props.projectData.project_id}
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="mb-3 text-lg">Delete Project</div>
          <div className="mb-3 text-gray-400">
            If you want to permanently delete this project and all of its data,
            including but not limited to users, issues, and comments, you can do
            so below.
          </div>
          <button
            className={cn(
              "bg-linear-button-secondary mb-10 w-fit rounded p-1 px-3 text-start"
            )}
          >
            Delete this Project
          </button>
        </div>
      </div>
    </TaskPage>
  );
}
