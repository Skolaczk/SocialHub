'use client';

import { IUser } from '@/interfaces';
import Image from 'next/image';
import { FormField } from '@/components';
import { useFormik } from 'formik';
import { CameraIcon } from '@/assets/icons';
import { validationSchema } from './utils';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';

export const EditProfileForm = ({ username, bio, image }: IUser) => {
  const [file, setFile] = useState<(File & { preview: string }) | null>();
  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: { username, bio: bio ?? '' },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
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
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
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
        type="text"
        label="username"
        onChange={handleChange}
        error={touched.username && errors.username}
        value={values.username}
      />
      <div className="flex flex-col w-full">
        <label htmlFor="bio" className="mb-2">
          Content
        </label>
        <textarea
          id="bio"
          name="bio"
          onChange={handleChange}
          value={values.bio}
          className="resize-none bg-neutral-100 dark:bg-neutral-500 rounded-sm p-2 h-24"
          placeholder={`I'm ${username} ...`}
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-primary mt-5 w-full p-2 rounded-sm text-white xs:w-fit xs:px-20"
        >
          Save
        </button>
      </div>
    </form>
  );
};
