"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const SignInButton = () => {
  const { data: session } = useSession();
  console.log({ session });

  if (session && session.user)
    return (
      <div className="flex gap-4 ml-auto items-center">
        <p className={`${poppins.className} flex w-12 font-bold h-12 bg-gradient-to-t from-lapis_lazuli/70 to-cool_gray/50 justify-center items-center rounded-full hover:bg-lapis_lazuli duration-150`}>{session.user.name.substring(0,2).toUpperCase()}</p>
        <Link
          href={"/api/auth/signout"}
          className={`${poppins.className} flex items-center font-bold text-md hover:bg-light_red bg-red-500 duration-150 p-2 rounded-xl`}
        >
          Sign Out
        </Link>
      </div>
    );

  return (
    <div className="flex gap-4 ml-auto items-center">
      <Link
        href={"/api/auth/signin"}
        className={`${poppins.className} flex items-center font-bold text-lg text-light_green hover:bg-white/20 duration-150 p-2 rounded-2xl`}
      >
        Sign In
      </Link>
      <Link
        href={"/signup"}
        className={`${poppins.className} flex p-2 rounded-2xl items-center font-bold text-lg bg-light_green text-rich_black hover:bg-green-500 hover:text-white duration-150`}
      >
        Sign Up
      </Link>
    </div>
  );
};

export default SignInButton;