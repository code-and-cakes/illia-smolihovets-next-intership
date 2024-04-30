import { UserSexEnum } from "@/components/form/types";
import { boolean, object, string, z } from "zod";

export const createUserSchema = object({
  name: string().refine((data) => data.trim().length > 0, {
    message: "Name is required",
  }),
  email: string().email(),
  policy: boolean().refine((data) => data, {
    message: "You must accept the policy",
  }),
  country: string().refine((data) => data.trim().length > 0, {
    message: "Country is required",
  }),
  sex: z
    .unknown()
    .refine(
      (data) => Object.values(UserSexEnum).includes(data as UserSexEnum),
      {
        message: "Invalid sex value",
      }
    )
    .refine((data) => data !== undefined, {
      message: "Sex is required",
    }),
});
