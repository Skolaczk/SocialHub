import { Metadata } from 'next';

import { EditProfile } from '@/features';
import { getMe } from '@/services';

export const metadata: Metadata = {
  title: 'Edit profile',
  alternates: {
    canonical: '/edit',
  },
};

const Edit = async () => {
  const user = await getMe();

  return user && <EditProfile {...user} />;
};

export default Edit;
