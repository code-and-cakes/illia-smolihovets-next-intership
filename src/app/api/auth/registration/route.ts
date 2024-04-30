const { env } = require("@/lib/env/env");

import { create } from "apisauce";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  //@ts-ignore
  const { email, password } = await request.json();

  try {
    const api = create({
      baseURL: env.NEXT_PUBLIC_APP_API_URL,
      timeout: 10000,
      withCredentials: true,
      headers: {
        Accept: "application/json",
      },
    });

    const response = await api.post(`/auth/registration`, {
      password: password,
      email: email,
      firstName: "John",
      lastName: "Doe",
    });

    if (response.ok) {
      return new NextResponse("success", { status: 200 });
    } else {
      return new NextResponse("error", { status: 400 });
    }
  } catch (err: any) {
    return new NextResponse(err.message, { status: 400 });
  }
};
