'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { EditUserSchema, editUserSchema } from './utils';

import { editUserAction } from '@/actions';
import { CameraIcon } from '@/assets/icons';
import { FormField } from '@/components';
import { IError, IUser } from '@/interfaces';

export const EditProfileForm = ({ username, bio, image }: IUser) => {
  const router = useRouter();
  const [file, setFile] = useState<(File & { preview: string }) | null>();
  const [error, setError] = useState<IError | null>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserSchema>({
    defaultValues: {
      username,
      bio: bio ?? '',
    },
    resolver: zodResolver(editUserSchema),
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(
      Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      }),
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { 'image/jpeg': [], 'image/png': [] },
  });

  const onSubmit = async ({ username, bio }: EditUserSchema) => {
    const formData = new FormData();
    formData.append('image', file as File);
    formData.append('username', username);
    formData.append('bio', bio);

    const { data, error } = await editUserAction(formData);
    setError(error);

    if (!error) {
      router.push(`/profile/${data?.username}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div {...getRootProps()} className="relative mt-5 flex justify-center">
        <input {...getInputProps()} />
        <Image
          src={file ? file.preview : image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="h-24 w-24 rounded-full brightness-50"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CameraIcon />
        </div>
      </div>
      <FormField
        label="username"
        register={register('username')}
        error={errors.username?.message}
      />
      <div className="flex w-full flex-col">
        <FormField
          label="bio"
          error={errors.bio?.message}
          register={register('bio')}
          isTextarea
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-5 w-full rounded-sm bg-primary p-2 text-white xs:w-fit xs:px-20"
        >
          Save
        </button>
      </div>
      <p className="mt-5 text-center text-danger">{error?.message}</p>
    </form>
  );
};
