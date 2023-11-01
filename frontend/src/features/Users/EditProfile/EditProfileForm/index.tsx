'use client';

import { FormField } from '@/components';
import { CameraIcon } from '@/assets/icons';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { IError, IUser } from '@/interfaces';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';
import { editUserAction } from '@/actions';
import { editUserSchema, EditUserSchema } from './utils';

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
      <div {...getRootProps()} className="flex justify-center relative mt-5">
        <input {...getInputProps()} />
        <Image
          src={file ? file.preview : image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-full w-24 h-24 brightness-50"
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
      <div className="flex flex-col w-full">
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
          className="bg-primary mt-5 w-full p-2 rounded-sm text-white xs:w-fit xs:px-20"
        >
          Save
        </button>
      </div>
      <p className="text-center text-danger mt-5">{error?.message}</p>
    </form>
  );
};
