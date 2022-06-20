import { NextResponse } from "next/server";
import supabase from "@/libs/supabase";
export default function middleware(req) {
  const session = supabase.auth.session();
  const url = req.nextUrl.clone();
  url.pathname = "/";
  if (session) {
    return NextResponse.replace(url);
  }
}
