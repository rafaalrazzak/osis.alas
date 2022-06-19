import supabase from "@/libs/supabase";
import { useRouter } from "next/router";
import Head from "next/head";
import toast from "react-hot-toast";

export default function SignOut() {
  const session = supabase.auth.session();
  const { push } = useRouter();
  if (session) {
    supabase.auth.signOut();
    push("/");
    toast.success("Berhasil keluar");
  }
  return (
    <Head>
      <title>OSIS | Sign Out</title>
    </Head>
  );
}
