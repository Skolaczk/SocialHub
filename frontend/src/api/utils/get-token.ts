const isServer = typeof window === 'undefined';

export const getToken = async () => {
  if (isServer) {
    const { cookies } = await import('next/headers');
    return cookies().get('token')?.value;
  } else {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
  }
};
