import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const url = request.nextUrl.clone();
  const token = request.cookies.get('token');

  if (token) {
    if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
      return NextResponse.rewrite(new URL('/', request.url));
    }
  } else {
    const staticRoutes = ['/', '/explore', '/notifications', '/create'];
    const dynamicRoutes = ['/profile', '/posts'];
    if (
      staticRoutes.includes(url.pathname) ||
      dynamicRoutes.some((route) => url.pathname.startsWith(route))
    ) {
      {
        return NextResponse.rewrite(new URL('/sign-in', request.url));
      }
    }
  }
};
