import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { Layout, Gradient } from "@components";
import Form from "@/componentsAuth/Form";
import Input from "@/componentsAuth/Input";
import Button from "@/componentsAuth/Button";

function Validation() {
  return (
    <div className="jusfify-center flex w-full items-center rounded-lg bg-red-500 py-2 text-center text-sm text-white">
      <div className="flex items-center gap-2 pl-4">
        <CgDanger className="h-4 w-4" />
        <p>Password harus sama</p>
      </div>
    </div>
  );
}

export default function ResetUserPassword() {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [isNotSame, setIsNotSame] = useState(false);
  const [hash, setHash] = useState("");
  const checkPass = () => setIsNotSame(pass !== confirmPass);
  const router = useRouter();
  useEffect(() => {
    checkPass();
  }, [pass, confirmPass]);

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    try {
      if (checkPass === true) {
        if (!hash) {
          return toast.error("Sepertinya terjadi kesalahan");
        } else {
          const hashArr = hash
            .substring(1)
            .split("&")
            .map((param) => param.split("="));
          console.log(hashArr);
        }
      }
    } catch (error) {
      toast.error("Sepertinya terjadi kesalahan");
    }
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
            {isNotSame && <Validation />}
            <Input
              name="Password"
              placeholder="Enter your new password"
              type={isPassword ? "password" : "text"}
              value={pass}
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
            <Input
              name="Confirm Password"
              placeholder="Enter your same password"
              type={isConfirmPassword ? "password" : "text"}
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            >
              <button
                type="button"
                onClick={() => setIsConfirmPassword(!isConfirmPassword)}
                className="absolute right-0 mt-2 mr-3 cursor-pointer"
              >
                {isConfirmPassword ? (
                  <FaEye className="h-3 w-4 text-primary-800" />
                ) : (
                  <FaEyeSlash className="h-3 w-4 text-primary-800" />
                )}
              </button>
            </Input>
            <Button name="Reset Password" type="submit" disabled={isNotSame} />
          </Form>
        </Layout>
      </div>
    </>
  );
}
