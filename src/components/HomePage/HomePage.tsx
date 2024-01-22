"use client";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import SignInForm from "../SignInForm";

const HomePage = () => {
  const { data, status } = useSession();
  // const isSignedIn = Boolean(data);

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     console.log("No JWT");
  //     console.log(status);
  //     void signIn("google");
  //   }
  // }, [status]);

  return (
    <div>
      {status === "authenticated" ? (
        <div>{data?.user?.email}</div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <SignInForm />
        </div>
      )}
    </div>
  );
};

export default HomePage;
