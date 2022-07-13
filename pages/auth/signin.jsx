import { useState } from "react";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Layout, Gradient, Link, SEO } from "@components";
import Form from "@/componentsAuth/Form";
import Input from "@/componentsAuth/Input";
import Button from "@/componentsAuth/Button";
import { useUser } from "@/context/user";
import href from "@/data/href";

export default function SignIn() {
  const { isAuth, signin } = useUser();
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    signin(email, pass);
  };

  isAuth();

  return (
    <>
      <SEO title="Sign In" />
      <div className="relative">
        <Gradient />
        <Layout>
          <Form name="Login to your account" onSubmit={onSubmit}>
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
            <Link href={href.forgot_password}>
              <a className="mt-2 flex text-sm text-primary-500 underline">
                Forgot password?
              </a>
            </Link>
            <Button name="Sign In" />
          </Form>
        </Layout>
      </div>
    </>
  );
}
