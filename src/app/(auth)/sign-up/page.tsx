import { Metadata } from "next";

import { SignUpForm } from "@/components/form/auth/login/sign-up-form";
import BaseAuthLayout from "@/components/layout/base-auth-layout";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <BaseAuthLayout
      title="Sign Up"
      subtitle="Enter your email below to create your account"
      alternativeButton={{ label: "Sign In", href: "/sign-in" }}
      form={<SignUpForm />}
    ></BaseAuthLayout>
  );
}
