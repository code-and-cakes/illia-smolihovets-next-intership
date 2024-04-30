const { env } = require("@/lib/env/env");
const { envServer } = require("@/lib/env/env-server");

import { ApiResponse, create } from "apisauce";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, req): Promise<any> {
        try {
          const api = create({
            baseURL: env.NEXT_PUBLIC_APP_API_URL,
            withCredentials: true,
            headers: {
              Accept: "application/json",
            },
          });

          const response: ApiResponse<any> = await api.post("/auth/login", {
            password: credentials?.password,
            email: credentials?.email,
          });

          if (response?.ok) {
            const user = {
              token: response.data.token,
              refreshToken: response.data.refreshToken,
              email: response.data.user.email,
              name: `${response.data.user.firstName} ${response.data.user.lastName}`,
              first_name: response.data.user.firstName || "",
              last_name: response.data.user.lastName || "",
            };

            return Promise.resolve(user);
          } else {
            const message = (response?.data as { status?: string })?.status;
            return Promise.reject(new Error(message));
          }
        } catch (e) {
          console.error(e);
          throw new Error(e as string);
        }
      },
    }),
  ],
  callbacks: {
    session: (params) => {
      const { session, token } = params;
      return {
        ...session,
        user: {
          ...token,
        },
      };
    },
    jwt: (params) => {
      const { token, user } = params;

      if (user)
        return {
          ...token,
          ...user,
        };

      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: envServer.NEXTAUTH_SECRET,
  jwt: {
    secret: envServer.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: "/sign-in",
    newUser: "/sign-up",
  },
};
