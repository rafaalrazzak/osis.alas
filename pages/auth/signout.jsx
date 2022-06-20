import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import toast from "react-hot-toast";
import supabase from "@/libs/supabase";

export default function SignOut() {
  const session = supabase.auth.session();
  const { replace, push } = useRouter();

  useEffect(() => {
    if(!session){
      replace("/")
    }
  }, [])

  if (session) {
     supabase.auth.signOut();
    replace("/");
    toast.success("Berhasil keluar");
  }

  return (
    <Head>
      <title>OSIS | Sign Out</title>
    </Head>
  );
}
