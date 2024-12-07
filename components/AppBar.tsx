"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import SignInButton from "./SignInButton";
import Image from "next/image";
import CustomLink from "./CustomLink";
import { useSession } from "next-auth/react";
import { useStoreFavorites } from "@/app/store/useStore";


const AppBar = () => {
  const { data: session } = useSession();
  console.log({ session });
  const favorites = useStoreFavorites((state) => state.favorites).toString();
  const changeFavorites = useStoreFavorites((state) => state.set);
  useEffect(() => {
    if (session && session.user) {
      updateFavorites();
    }
  }, [session]);
  const updateFavorites = async () => {
    const response = await fetch("favorite/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    changeFavorites(data);
  };
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-rich_black to-indigo-950 shadow sticky top-0 w-full">
      <Link href={"/"}><Image src="/logo.png" width={250} height={100} alt="Logo" /></Link>
      <CustomLink className="transition-colors hover:text-blue-500" href={"/league/brazil"}>
        Brazilian League
      </CustomLink>
      <CustomLink className="transition-colors hover:text-blue-500" href={"/league/spain"}>
        Spanish League
      </CustomLink>
      {session && session.user && (
        <CustomLink className="transition-colors hover:text-blue-500" href={"/"}>
          My Favorites
        </CustomLink>
      )}
      <SignInButton />
    </header>
  );
};

export default AppBar;