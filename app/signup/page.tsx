"use client";
import { Button } from "@/components/Button";
import InputBox from "@/components/InputBox";
import Link from "next/link";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const router = useRouter();
  const register = async () => {
    const res = await fetch(process.env.BACKEND_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    console.log({ response });
    alert("User Registered!");
    router.push("/");
  };
  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <main className="w-full flex flex-col justify-center items-center min-h-[80vh]">
      <div className="w-full lg:w-3/4 bg-gradient-to-t from-indigo-600/20 to-white/10 p-8 rounded-3xl ">
      <h2 className="text-4xl font-bold text-center mt-8 capitalize">Sign Up</h2>
      <div className="p-2 flex flex-col gap-6">
        <InputBox
          autoComplete="off"
          name="name"
          labelText="Name"
          required
          onChange={(e) => (data.current.name = e.target.value)}
        />
        <InputBox
          name="email"
          labelText="Email"
          required
          onChange={(e) => (data.current.email = e.target.value)}
        />
        <InputBox
          name="password"
          labelText="password"
          type="password"
          required
          onChange={(e) => (data.current.password = e.target.value)}
        />
        <div className="flex justify-center items-center gap-2">
          <Button onClick={register}>Submit</Button>
          <Link className="" href={"/"}>
            Cancel
          </Link>
        </div>
      </div>
      </div>
    </main>
  );
};

export default SignupPage;