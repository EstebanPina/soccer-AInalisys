import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "700", subsets: ["latin"], style: "italic" });
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  href: string;
  children: React.ReactNode;
}

export default function CustomLink({ href, children, ...props }: Props) {
  return (
    <Link className={`${poppins.className} flex h-full p-4 font-bold text-xl uppercase italic hover:rounded-xl hover:bg-white/10 duration-150 hover:text-white`} href={href}>
      {children}
    </Link>
  );
}
