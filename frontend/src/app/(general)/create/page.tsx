import { Metadata } from 'next';

import { CreatePost } from '@/features';

export const metadata: Metadata = {
  title: 'Create post',
  alternates: {
    canonical: '/create',
  },
};

const Create = () => {
  return <CreatePost />;
};

export default Create;
