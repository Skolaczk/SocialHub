import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getMe } from '@/services';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const token = request.cookies.get('token');
  const { error } = await getMe();

  if (token && !error) {
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
}
