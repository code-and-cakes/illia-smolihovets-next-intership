import { userSignup } from "@/supabase/users";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
  name: string;
  surname: string;
}

export default function SignUpForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data.email, data.password);
    await userSignup(data.email, data.password, data.name, data.surname);
    router.refresh();
  };

  return (
    <form className="mt-2 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <p className="text-sm text-gray-300">Email:</p>
      <input className="w-52 text-black" {...register("email")}></input>
      <p className="text-sm text-gray-300">Password:</p>
      <input
        type="password"
        className="w-52 text-black"
        {...register("password")}
      ></input>
      <p className="text-sm text-gray-300">First Name:</p>
      <input className="w-52 text-black" {...register("name")}></input>
      <p className="text-sm text-gray-300">Surname:</p>
      <input className="w-52 text-black" {...register("surname")}></input>
      <button
        type="submit"
        className="mt-4 w-24 rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Sign Up
      </button>
    </form>
  );
}
