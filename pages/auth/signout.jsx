import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import toast from "react-hot-toast";
import supabase from "@/libs/supabase";
import { useUser } from "@/context/user";

export async function getServerSideProps(ctx) {
  const sbToken = ctx.req.headers.cookie["sb-access-token"];
  if (!sbToken) {
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

  return (
    <Head>
      <title>OSIS | Sign Out</title>
    </Head>
  );
}
