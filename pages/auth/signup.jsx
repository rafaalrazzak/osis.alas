import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Layout, Gradient } from "@components";
import Form from "@/componentsAuth/Form";
import Input from "@/componentsAuth/Input";
import Button from "@/componentsAuth/Button";
import supabase from "@/libs/supabase";
import { useUser } from "@/context/user";

export default function SignIn() {
  const session = supabase.auth.session();
  const { replace } = useRouter();
  const { signup } = useUser();

  if(session){
    replace("/")
  }

  const [isPassword, setIsPassword] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    signup(username, email, pass);
  };

  return (
    <>
      <Head>
        <title>OSIS | Sign Up</title>
      </Head>
      <div className="relative">
        <Gradient />
        <Layout>
          <Form name="Sign up your acccount" onSubmit={onSubmit}>
            <Input
              name="Username"
              aria-label="enter your username"
              value={username}
              placeholder="Enter your username..."
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              name="Email"
              aria-label="enter email adress"
              value={email}
              type="email"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="Password"
              aria-label="enter Password"
              value={pass}
              type={isPassword ? "password" : "text"}
              placeholder="Enter your password..."
              minLength="8"
              onChange={(e) => setPass(e.target.value)}
            >
           
              <button
                type="button"
                onClick={() => setIsPassword(!isPassword)}
                className="absolute right-0 mt-2 mr-3 cursor-pointer"
              >
                {isPassword ? (
                  <FaEye className="h-3 w-4 text-primary-800" />
                ) : (
                  <FaEyeSlash className="h-3 w-4 text-primary-800" />
                )}
              </button>
            </Input>
            <Button name="Sign In" />
          </Form>
        </Layout>
      </div>
    </>
  );
}
