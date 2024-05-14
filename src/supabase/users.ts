import { supabase } from "@/utils/supabase";

export const userLogin = async (email: string, password: string) => {
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
  try {
    let { error } = await supabase.auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
