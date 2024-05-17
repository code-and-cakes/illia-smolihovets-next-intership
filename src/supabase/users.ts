import { createSupabaseFrontendClient } from "@/utils/supabase";
import { createSupabaseServerComponentClient } from "@/utils/supabaseAppRouterClient";

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

export const getUserData = async () => {
  const supabase = createSupabaseServerComponentClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // console.log(user);
    const { data: users_data } = await supabase
      .from("users_data")
      .select("*")
      .eq("user_id", user?.id);
    return users_data![0];
  } catch (error) {}
};

// export const getUsersData = async () => {
//   const supabase = createSupabaseServerComponentClient();
//   try {
//     const { data: users_data, error } = await supabase
//       .from("users_data")
//       .select("*");
//     console.log(users_data);
//   } catch (error) {
//     console.log(error);
//   }
// };
