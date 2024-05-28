"use client";

import TaskPage from "@/components/general/app/TaskPage";
import { cn } from "@/lib/utils";
import { updateProjectName } from "@/supabase/projects";
import { User } from "@/supabase/users";
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
};

const UserList = ({ userList, assignedUsers }: UserListProps) => {
  console.log(assignedUsers);

  // const checkAssign = () => {
  //   const result = assignedUsers.find()
  // };

  return userList.map((user) => {
    return (
      <>
        <div key={user.id}>{user.full_name}</div>
        {<div></div>}
      </>
    );
  });
};

export default function ProjectMenu(props: ProjectMenuProps) {
  const router = useRouter();

  const { register, handleSubmit } = useForm<IProjectInput>();
  const onSubmit: SubmitHandler<IProjectInput> = async (data) => {
    await updateProjectName(data.projectName, props.projectData.project_id);
    console.log(data.projectName);
    router.refresh();
  };

  console.log(props.projectData);

  return (
    <TaskPage>
      <div className="m-auto mt-16 flex w-6/12 flex-1 flex-col text-white">
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
              "focus:border-linear-button mb-7 w-fit rounded border border-linear-popover-border bg-inherit p-1 outline-none"
            )}
            // value={props.projectData.project_name}
            placeholder={props.projectData.project_name}
            {...register("projectName")}
          ></input>
          <button
            type="submit"
            className={cn("bg-linear-button w-fit rounded p-1 px-3 text-start")}
          >
            Update
          </button>
        </form>
        <div>
          <div className="border-b border-linear-border pb-5">
            <div className="text-lg">Manage members</div>
            <div>All members: </div>
            <UserList
              userList={props.userList}
              assignedUsers={props.projectData.users_data}
            />
          </div>
        </div>
        <div>
          <div>Delete Project</div>
          <div>
            If you want to permanently delete this workspace and all of its
            data, including but not limited to users, issues, and comments, you
            can do so below.
          </div>
          <button>Delete this Project</button>
        </div>
      </div>
    </TaskPage>
  );
}
