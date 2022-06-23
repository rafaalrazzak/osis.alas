import { useState } from "react";
import Head from "next/head";
import { Layout, Gradient } from "@components";
import Form from "@/componentsAuth/Form";
import Input from "@/componentsAuth/Input";
import Button from "@/componentsAuth/Button";
import { useUser } from "@/context/user";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const { resetPass } = useUser();

  function onSubmit(e) {
    e.preventDefault();
    resetPass(email);
   
  }

  return (
    <>
      <Head>
        <title>OSIS | Reset Password</title>
      </Head>
      <div className="relative">
        <Gradient />
        <Layout>
          <Form name="Reset Password" onSubmit={onSubmit}>
            <Input
              name="Email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button name="Reset Password" type="submit" />
          </Form>
        </Layout>
      </div>
    </>
  );
}