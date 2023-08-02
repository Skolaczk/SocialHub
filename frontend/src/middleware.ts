import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const token = request.cookies.get('token');

  if (token) {
    if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
      return NextResponse.rewrite(new URL('/', request.url));
    }
  } else {
    const routes = ['/', '/explore', '/notifications'];
    if (routes.includes(url.pathname) || url.pathname.startsWith('/profile')) {
      {
        return NextResponse.rewrite(new URL('/sign-in', request.url));
      }
    }
  }
}
