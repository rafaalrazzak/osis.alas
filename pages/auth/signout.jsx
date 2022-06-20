import supabase from "@/libs/supabase";
import { useRouter } from "next/router";
import Head from "next/head";
import toast from "react-hot-toast";

export default function SignOut() {
  const session = supabase.auth.session();
  const { replace } = useRouter();
  if (session) {
    supabase.auth.signOut();
    replace("/");
    toast.success("Berhasil keluar");
  } else {
    replace("/");
  }
  return (
    <Head>
      <title>OSIS | Sign Out</title>
    </Head>
  );
}
