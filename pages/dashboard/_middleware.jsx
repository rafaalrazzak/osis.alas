import { NextResponse } from "next/server";
import supabase from "@/libs/supabase";

export default function middleware() {
  const session = supabase.auth.session();
  if (!session) {
    return NextResponse.redirect("/auth/signin");
  }
}
