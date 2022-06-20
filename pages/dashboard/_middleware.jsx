import { NextResponse } from "next/server";
import supabase from "@/libs/supabase";
import href from "@/data/href";
export default function middleware(req) {
  const session = supabase.auth.session();
  const url = req.nextUrl.clone();
  url.pathname = href.signin;
  if (!session) {
    return NextResponse.rewrite(url);
  }
}
