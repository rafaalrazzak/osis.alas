import { NextResponse } from "next/server";
export default function middleware(req) {
  const token = req.cookies['sb-access-token'];
  console.log(token)
  const url = req.nextUrl.clone();
  url.pathname = "/";
  if (!token) return NextResponse.redirect(url);
}
