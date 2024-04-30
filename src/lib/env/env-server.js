"use server";

const zod = require("zod");

const envServerSchema = zod
  .object({
    NEXTAUTH_URL: zod.string(),
    NEXTAUTH_SECRET: zod.string(),
  })
  .required();

const envVariables = envServerSchema.safeParse({
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
});

if (!envVariables.success) {
  console.error(envVariables.error.issues);

  throw new Error(
    "Environment server variables validation failed. Some of the environment variables are missing or invalid."
  );
}

const envServer = envVariables.data;

module.exports = { envServer, envServerSchema };
