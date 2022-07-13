import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import toast from "react-hot-toast";
import supabase from "@/libs/supabase";
import { useUser } from "@/context/user";
import { SEO } from "@components";

export async function getServerSideProps(ctx) {
  const token = ctx.req.headers.cookie
    ?.split(";")
    .find((c) => c.includes("sb-access-token"))
    .split("=")[1];

  if (!token) {
    ctx.res.writeHead(302, {
      Location: "/",
    });
    ctx.res.end();
  }

  return {
    props: {},
  };
}

export default function SignOut() {
  const session = supabase.auth.session();
  const { replace } = useRouter();
  const { signout } = useUser();
  useEffect(() => {
    if (!session) {
      replace("/");
    }
  }, []);

  if (session) {
    signout();
    toast.success("Berhasil keluar");
    replace("/");
  }

  return <SEO title="Sign Out" />;
}
