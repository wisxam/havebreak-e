"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <Button
        variant="default"
        onClick={() => signOut()}
        className={`group ${buttonVariants({
          size: "sm",
        })}`}
      >
        Sign out
        <ArrowRight className="ml-1 h-5 w-5 duration-300 ease-in-out group-hover:translate-x-1" />
      </Button>
    );
  }

  return (
    <Button
      variant="default"
      onClick={() => signIn()}
      className={`group ${buttonVariants({
        size: "sm",
      })}`}
    >
      Sign in
      <ArrowRight className="ml-1 h-5 w-5 duration-300 ease-in-out group-hover:translate-x-1" />
    </Button>
  );
};

export default SigninButton;
