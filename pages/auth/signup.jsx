import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {
  Layout,
  Button,
  Gradient
} from "@components";
import supabase from "@/libs/supabase";

export default function SignIn() {
  const { push } = useRouter();
  const session = supabase.auth.session();
  if (session) {
    push("/");
  }

  const [password, setPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function resetForm() {
    setEmail("");
    setPass("");
    }
  const onSubmit = async (e) => {
    e.preventDefault();
    const { error, data, loading } = await supabase.auth.signUp({
      email: email,
      password: pass,
    });
    if (error) {
    toast.error("Sepertinya ada masalah");
    console.log(error.message);
  } else if (loading) {
    toast.loading("Loadingg...");
  } else {
    resetForm();
    push("/");
    toast.success("Kamu berhasil register");
  }
  };

  return (
    <div className="relative">

        <Gradient />
      <Layout>
        <form
          className="flex flex-col max-w-md pt-24 px-12 mx-auto pb-20 items-center justify-center"
          onSubmit={onSubmit}
        >
          <div className="mt-16 w-full rounded-xl bg-primary-200/30 backdrop-blur-lg p-10 shadow">
            <p
              tabIndex={0}
              role="heading"
              aria-label="Login to your account"
              className="py-4 text-xl font-extrabold leading-6 text-primary-800 dark:text-primary-200"
            >
              Sign up to your account
            </p>
            <div>
              <lable className="text-sm font-medium leading-none text-primary-800 dark:text-primary-200">
                Email
              </lable>
              <input
                aria-label="enter email adress"
                value={email}
                type="email"
                placeholder="Enter your email..."
                className="mt-2 w-full rounded-lg border placeholder:text-gray-800 bg-primary-300 py-3 pl-3 text-xs font-medium leading-none text-gray-800 focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-6 w-full">
              <lable className="text-sm font-medium leading-none text-primary-800 dark:text-primary-200">
                Password
              </lable>
              <div className="relative flex items-center justify-center">
                <input
                  aria-label="enter Password"
                  value={pass}
                  type={password ? "password" : "text"}
                  placeholder="Enter your password..."
                  className="mt-2 w-full placeholder:text-gray-800 rounded-lg border bg-primary-300 py-3 pl-3 text-xs font-medium leading-none text-gray-800 focus:outline-none"
                  onChange={(e) => setPass(e.target.value)}
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <button type="button" onClick={() => setPassword(!password)}>
                    {password ? (
                      <FaEye className="h-3 w-4 text-primary-800" />
                    ) : (
                      <FaEyeSlash className="h-3 w-4 text-primary-800" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button
                variant="solidYellow"
                type="submit"
                aria-label="Login"
                className="w-full rounded-lg border bg-secondary-500 py-4 text-sm font-semibold leading-none text-primary-50 outline-none text-center justify-center flex"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </form>
      </Layout>
    </div>
  );
}
