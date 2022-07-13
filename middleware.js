import { NextResponse } from "next/server";
export function middleware(req) {
  if (req.nextUrl.pathname.includes("/dashboard")) {
    const token = req.cookies.get("sb-access-token");
    if (!token) return NextResponse.redirect(new URL("/", req.url));
  }
  if (req.nextUrl.pathname.startsWith("/auth")) {
    if (!req.nextUrl.pathname.includes("/auth/signout")) {
      const token = req.cookies.get("sb-access-token");
      if (token) return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }
}
