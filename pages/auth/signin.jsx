import React, { useState } from "react";
import toast from "react-hot-toast";
import Head from "next/head";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Layout, Button, Gradient } from "@components";
import supabase from "@/libs/supabase";

export default function SignIn() {
  const [password, setPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function resetForm() {
    setEmail("");
    setPass("");
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const { error, data, loading } = await supabase.auth.signIn({
      email: email,
      password: pass,
    });
    if (error) {
      toast.error("Masalah di email / pasasword kamu");
      console.log(error.message);
    } else if (loading) {
      toast.loading("Loadingg...");
    } else {
      resetForm();
      toast.success("Kamu berhasil login");
    }
  };

  return (
    <>
      <Head>
        <title>OSIS | Sign In</title>
      </Head>
      <div className="relative">
        <Gradient />
        <Layout>
          <form
            className="mx-auto flex max-w-md flex-col items-center justify-center px-12 pt-24 pb-20"
            onSubmit={onSubmit}
          >
            <div className="mt-16 w-full rounded-xl bg-primary-200/30 p-10 shadow backdrop-blur-lg">
              <p
                tabIndex={0}
                role="heading"
                aria-label="Login to your account"
                className="py-4 text-xl font-extrabold leading-6 text-primary-800 dark:text-primary-200"
              >
                Login to your account
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
                  className="mt-2 w-full rounded-lg border bg-primary-300 py-3 pl-3 text-xs font-medium leading-none text-gray-800 placeholder:text-gray-800 focus:outline-none"
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
                    className="mt-2 w-full rounded-lg border bg-primary-300 py-3 pl-3 text-xs font-medium leading-none text-gray-800 placeholder:text-gray-800 focus:outline-none"
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => setPassword(!password)}
                    >
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
                  className="bg-secondary-500 flex w-full justify-center rounded-lg border py-4 text-center text-sm font-semibold leading-none text-primary-50 outline-none"
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </Layout>
      </div>
    </>
  );
}
