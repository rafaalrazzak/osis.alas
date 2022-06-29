import { NextResponse } from "next/server";
export function middleware(req) {
  console.log(req.nextUrl.pathname);
  if (req.nextUrl.pathname.includes("/dashboard")) {
    const token = req.cookies.get("sb-access-token");
    if (!token) return NextResponse.rewrite(new URL("/", req.url));
  }
}
