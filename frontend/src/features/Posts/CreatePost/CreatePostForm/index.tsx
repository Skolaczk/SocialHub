'use client';

import { UploadIcon, XIcon } from '@/assets/icons';
import { FormField } from '@/components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { createPostAction } from '@/actions';
import { useRouter } from 'next/navigation';
import { useDropzone } from 'react-dropzone';
import { createPostSchema, CreatePostSchema } from './utils';

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
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-full gap-y-5 mt-8"
    >
      <div
        {...getRootProps()}
        className="flex flex-col items-center py-10 w-full border border-dashed border-primary rounded-sm"
      >
        <input {...getInputProps()} />
        <UploadIcon />
        <p className="text-neutral-500 dark:text-neutral-100 my-1">
          Drop your image here, or browse
        </p>
        <span className="text-neutral-200 dark:text-neutral-300 text-sm">
          PNG, JPG are allowed
        </span>
      </div>
      {image && (
        <div className="flex justify-between items-center w-full bg-neutral-100 dark:bg-neutral-500 rounded-sm p-2">
          <p>{image.name}</p>
          <button onClick={() => setImage(null)}>
            <XIcon />
          </button>
        </div>
      )}
      <div className="flex flex-col w-full">
        <FormField
          label="content"
          error={errors.content?.message}
          register={register('content')}
          isTextarea
        />
      </div>
      <button
        type="submit"
        className="bg-primary w-full p-2 rounded-sm text-white dark:black xs:w-fit xs:px-20"
      >
        Create
      </button>
    </form>
  );
};
