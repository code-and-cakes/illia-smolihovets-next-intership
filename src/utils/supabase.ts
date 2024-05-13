import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseAdminKey = process.env.SUPABASE_CLIENT_API_KEY!;

export const supabase = createClientComponentClient();

export const supabaseAdmin = createClientComponentClient();

//without ! or String() take this error:
// Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
// Type 'undefined' is not assignable to type 'string'.
