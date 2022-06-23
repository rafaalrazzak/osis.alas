import { useState, useEffect } from "react";
import Head from "next/head";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Layout, Gradient } from "@components";
import Form from "@/componentsAuth/Form";
import Input from "@/componentsAuth/Input";
import Button from "@/componentsAuth/Button";
import { useUser } from "@/context/user";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const { resetPass } = useUser();
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [isNotSame, setIsNotSame] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    resetPass(email);
  }

  return (
    <>
      <Head>
        <title>OSIS | Sign In</title>
      </Head>
      <div className="relative">
        <Gradient />
        <Layout>
          <Form name="Reset Password" onSubmit={onSubmit}>
            <Input name="Email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
            <Button name="Reset Password" type="submit" />
          </Form>
        </Layout>
      </div>
    </>
  );
}
