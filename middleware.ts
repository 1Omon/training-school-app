import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const protectedRoutes = [
  "/school/learning-spaace",
  // "/school/administrator-office/admissions",
  "/school/administrator-office/overview",
  "/school/administrator-office/human-resource",
  "/school/administrator-office/resources",
  "/school/administrator-office/support",
  "/dashboard",
];
const publicRoutes = [
  "/",
  "/guild",
  "/school",
  "/center",
  "/school/facilitator",
  "/school/administrator-office",
];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get("session")?.value;
  const session = await decrypt();

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}
