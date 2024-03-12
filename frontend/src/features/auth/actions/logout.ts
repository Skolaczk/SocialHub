'use server';

import { cookies } from 'next/headers';

export const logoutAction = async () => {
  cookies().delete('token');
};
