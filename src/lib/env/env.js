const zod = require("zod");

const envSchema = zod
  .object({
    NEXT_PUBLIC_APP_API_URL: zod.string(),

    NEXT_PUBLIC_COOKIE_DOMAIN_NAME: zod.string(),
    NEXT_PUBLIC_SESSIONID_COOKIE_NAME: zod.string(),
  })
  .required();

const envVariables = envSchema.safeParse({
  NEXT_PUBLIC_APP_API_URL: process.env.NEXT_PUBLIC_APP_API_URL,
  NEXT_PUBLIC_SESSIONID_COOKIE_NAME:
    process.env.NEXT_PUBLIC_SESSIONID_COOKIE_NAME,
  NEXT_PUBLIC_COOKIE_DOMAIN_NAME: process.env.NEXT_PUBLIC_COOKIE_DOMAIN_NAME,
});

if (!envVariables.success) {
  console.error(envVariables.error.issues);

  throw new Error(
    "Environment variables validation failed. Some of the environment variables are missing or invalid."
  );
}

const env = envVariables.data;

module.exports = { env, envSchema };
