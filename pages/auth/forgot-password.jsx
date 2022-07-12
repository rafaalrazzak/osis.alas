import { useState } from "react";
import Head from "next/head";
import { Layout, Gradient, SEO } from "@components";
import Form from "@/componentsAuth/Form";
import Input from "@/componentsAuth/Input";
import Button from "@/componentsAuth/Button";
import { useUser } from "@/context/user";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { resetPass } = useUser();

  function onSubmit(e) {
    e.preventDefault();
    resetPass(email);
  }

  return (
    <>
      <SEO title="Forgot Password" />
      <div className="relative">
        <Gradient />
        <Layout>
          <Form name="Forgot Password" onSubmit={onSubmit}>
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
