import { useState } from "react";
import Head from "next/head";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Layout, Gradient, Link } from "@components";
import Form from "@/componentsAuth/Form";
import Input from "@/componentsAuth/Input";
import Button from "@/componentsAuth/Button";
import { useUser } from "@/context/user";
import href from "@/data/href";

export async function getServerSideProps(ctx) {
  const cookie = ctx.req.headers.cookie;
  if (cookie) {
    ctx.res.writeHead(302, {
      Location: "/",
    });
    ctx.res.end();
  }

  return {
    props: {},
  };
}

export default function SignIn() {
  const { signin } = useUser();

  const [isPassword, setIsPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    signin(email, pass);
  };

  return (
    <>
      <Head>
        <title>OSIS | Sign In</title>
      </Head>
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
              <a className="text-primary-500 text-sm underline mt-2 flex">Forgot password?</a>
            </Link>
            <Button name="Sign In" />
          </Form>
        </Layout>
      </div>
    </>
  );
}
