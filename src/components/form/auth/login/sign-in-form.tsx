"use client";

import * as React from "react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Form, FormInput } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignInForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: any) {
    console.log(data);
    signIn("credentials", {
      email: data.email,
      password: data.password,
    });
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <FormInput
              form={form}
              name="email"
              label="Email"
              inputProps={{
                placeholder: "Email",
                autoComplete: "email",
              }}
            />
            <FormInput
              form={form}
              name="password"
              label="Password"
              inputProps={{
                placeholder: "Password",
                autoComplete: "password",
              }}
            />
          </div>
          <Button disabled={isLoading} onClick={form.handleSubmit(onSubmit)}>
            {isLoading && (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </Form>
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 size-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 size-4" />
        )}{" "}
        GitHub
      </Button> */}
    </div>
  );
}
