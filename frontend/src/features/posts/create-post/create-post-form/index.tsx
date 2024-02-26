'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { CreatePostSchema, createPostSchema } from './utils';

import { createPostAction } from '@/actions';
import { FormField, Icons } from '@/components';

export const CreatePostForm = () => {
  const router = useRouter();
  const [image, setImage] = useState<File | null>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostSchema>({ resolver: zodResolver(createPostSchema) });

  const onSubmit = async ({ content }: CreatePostSchema) => {
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);
    formData.append('content', content);

    await createPostAction(formData);
    router.push('/');
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { 'image/jpeg': [], 'image/png': [] },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 flex w-full flex-col items-center gap-y-5"
    >
      <div
        {...getRootProps()}
        className="flex w-full flex-col items-center rounded-sm border border-dashed border-primary py-10"
      >
        <input {...getInputProps()} />
        <Icons.upload className="h-16 w-16 stroke-1 !text-primary" />
        <p className="my-1 text-neutral-500 dark:text-neutral-100">
          Drop your image here, or browse
        </p>
        <span className="text-sm text-neutral-200 dark:text-neutral-300">
          PNG, JPG are allowed
        </span>
      </div>
      {image && (
        <div className="flex w-full items-center justify-between rounded-sm bg-neutral-100 p-2 dark:bg-neutral-500">
          <p>{image.name}</p>
          <button onClick={() => setImage(null)}>
            <Icons.x />
          </button>
        </div>
      )}
      <div className="flex w-full flex-col">
        <FormField
          label="content"
          error={errors.content?.message}
          register={register('content')}
          isTextarea
        />
      </div>
      <button
        type="submit"
        className="dark:black w-full rounded-sm bg-primary p-2 text-white xs:w-fit xs:px-20"
      >
        Create
      </button>
    </form>
  );
};
