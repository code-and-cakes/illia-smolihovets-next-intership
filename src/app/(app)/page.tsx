import { getServerSession } from "next-auth/next";

export default function AuthenticationPage() {
  const session = getServerSession();

  return <div>Hello world!</div>;
}
