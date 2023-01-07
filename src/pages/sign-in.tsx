import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { unstable_getServerSession as getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import toast from "react-hot-toast";

import Layout from "../components/layout/Layout";
import Seo from "../components/Seo";

import { authOptions } from "./api/auth/[...nextauth]";
import React from "react";

const SignIn: NextPage = () => {
  const router = useRouter();
  const error = router.query.error as string;

  useEffect(() => {
    if (error) {
      const errors: { [key: string]: string } = {
        Signin: "Try signing with a different account",
        OAuthSignin: "Try signing with a different account",
        OAuthCallback: "Try signing with a different account",
        OAuthCreateAccount: "Try signing with a different account",
        EmailCreateAccount: "Try signing with a different account",
        Callback: "Try signing with a different account",
        OAuthAccountNotLinked: "Email is connected with another provider",
        EmailSignin: "Check your email address",
        CredentialsSignin: "Sign in failed. The credentials are incorrect",
      };

      toast.error(errors[error] || "Unable to sign in", {
        position: "bottom-right",
      });
    }
  }, [error]);

  const handleSignIn = (provider: string) => {
    signIn(provider).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      toast.error(`Unable to sign in with ${provider}`, {
        position: "bottom-right",
      });
    });
  };

  return (
    <>
               <Seo title="Sign In" />
        <div className="flex-grow flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl text-center font-semibold mt-10">
            Log in to Versus...
          </h1>
          <p className="text-center w-[95vw] max-w-[375px] text-sm text-gray-500">
           Bet, win and earn money with your friends
          </p>
          <button
            onClick={() => handleSignIn("google")}
            className="w-[95vw] max-w-[375px] flex justify-center items-center relative border border-gray-200 hover:border-gray-400 transition h-11 dark:bg-white dark:text-black dark:hover:bg-red-600 dark:border-black rounded-xl"
          >
            <span>Continue with Google</span>
          </button>
          <button
            onClick={() => handleSignIn("facebook")}
            className="w-[95vw] max-w-[375px] flex justify-center items-center relative border border-gray-200 hover:border-gray-400 transition h-11 dark:bg-white dark:text-black dark:hover:bg-red-600 dark:border-black rounded-xl"
          >
            <span>Continue with Facebook</span>
        </button>
        <button
          onClick={() => router.push("/")}
          className="my-10 w-[95vw] max-w-[175px] flex justify-center items-center relative border border-gray-200 hover:border-gray-400 transition h-11 dark:bg-white dark:text-black dark:hover:bg-red-600 dark:border-black rounded-xl"
        >
          <span>Return Home</span>
        </button>
        </div>
    </>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  if (session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
      props: {},
    };
  }

  return {
    props: {
      session,
    },
  };
};
