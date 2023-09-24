import { fetchApi } from '@/api/fetchApi';
import { IPost } from '@/interfaces';
import { redirect } from 'next/navigation';

export const Test = () => {
  const create = async (formData: FormData) => {
    'use server';
    const data = await fetchApi.post<IPost>('posts', formData);
    redirect(`/posts/${data.id}`);
  };

  return (
    <form action={create} className="flex justify-center">
      <label htmlFor="image">image</label>
      <input type="file" name="image" />
      <label htmlFor="content"></label>
      <input type="text" name="content" className="text-black" />
      <button>submit</button>
    </form>
  );
};
