export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/user-post/:path*", "/product/:path*", "/add-product/:path*"],
};
