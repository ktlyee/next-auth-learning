"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const SignInForm = () => {
  return (
    <Card className="py-3 px-16 bg-card-foreground border-none rounded-3xl">
      <CardContent className="flex flex-col items-center gap-6">
        <Image
          src="/images/next-auth-logo.png"
          alt="next-auth-logo"
          width={80}
          height={80}
          className="pt-4"
        />
        <Button
          onClick={() => signIn("google")}
          className="px-10 py-7 bg-gray-700 hover:bg-gray-600"
        >
          <Image
            src="/images/google-logo.png"
            alt="google-logo"
            width={35}
            height={35}
            className="fill-current pr-3"
          />
          Sign in with Google
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
