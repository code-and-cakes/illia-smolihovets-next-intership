import { Project } from "@/supabase/projects";
import { Task } from "@/supabase/tasks";
import { createSupabaseFrontendClient } from "@/utils/supabase";
import { createSupabaseServerComponentClient } from "@/utils/supabaseAppRouterClient";

export interface User {
  id: number;
  created_at: Date;
  full_name: string;
  email: string;
  user_id: number;
  projects: Array<Project>;
  tasks: Array<Task>;
}

export const userLogin = async (email: string, password: string) => {
  const supabase = createSupabaseFrontendClient();
  console.log(`in userlogin: ${email} and ${password}`);
  try {
    let { data: dataUser, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (dataUser) {
      console.log(dataUser);
      return dataUser;
    }
  } catch (error) {
    console.log(error);
  }
};

export const userSignup = async (
  email: string,
  password: string,
  userName: string,
  userSurname: string
) => {
  const supabase = createSupabaseFrontendClient();
  try {
    const {
      data: { user, session },
    } = await supabase.auth.signUp({
      email,
      password,
    });
    if (user) {
      console.log(user);
      await supabase.from("users_data").insert({
        full_name: `${userName} ${userSurname}`,
        user_id: user?.id,
        email,
      });
      return { session };
    }
  } catch (error) {
    console.log(error);
  }
};

export const userLogout = async () => {
  const supabase = createSupabaseFrontendClient();
  try {
    let { error } = await supabase.auth.signOut();
  } catch (error) {
    console.log(error);
  }
};

export const getUserTaskData = async () => {
  const supabase = createSupabaseServerComponentClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("users_data")
      .select(
        `
  id,
  full_name,
  tasks (*)
`
      )
      .eq("user_id", user?.id);
    // console.log(data![0]);
    return data![0];
  } catch (error) {}
};

export const GetUserProjectsData = async () => {
  const supabase = createSupabaseServerComponentClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // console.log(user);
    const { data, error } = await supabase
      .from("users_data")
      .select(
        `
  id,
  full_name,
  projects (project_id, project_name)
`
      )
      .eq("user_id", user?.id);
    // console.log(data![0], data![0].projects, data![0].projects[0].tasks);
    return data![0];
  } catch (error) {}
};

export const getUsersNames = async () => {
  const supabase = createSupabaseFrontendClient();
  try {
    const { data: users_data, error } = await supabase
      .from("users_data")
      .select("full_name, id");
    // console.log(users_data);
    return users_data;
  } catch (error) {
    console.log(error);
  }
};
