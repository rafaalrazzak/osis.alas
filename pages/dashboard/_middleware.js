import { NextResponse } from "next/server";
export default function middleware(req) {
  const cookies = req.cookies;
  const token = cookies["sb-access-token"];
  const url = req.nextUrl.clone();
  url.pathname = "/";
  if (!token) return NextResponse.redirect(url);
}
