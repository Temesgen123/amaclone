import NextAuth from 'next-auth';
import authConfig from './app/auth.config';

export const { auth: middleware } = NextAuth(authConfig);
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  /*
   * Match all request paths except for the onces starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
};
