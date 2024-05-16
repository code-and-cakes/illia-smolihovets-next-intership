import { createSupabaseReqResClient } from "@/utils/supabaseReqResClient";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
  const res = NextResponse.next();
  const supabase = createSupabaseReqResClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.rewrite(new URL("/auth", req.url));
  } else {
    return NextResponse.rewrite(new URL("/menu", req.url));
  }

  // return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
