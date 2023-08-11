'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeftIcon, UploadIcon, XIcon } from '@/assets/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createPost } from '@/services';
import { useDropzone } from 'react-dropzone';

export const CreatePostsModal = () => {
  const [image, setImage] = useState<File | null>();
  const router = useRouter();
  const isOpen = !!useSearchParams().get('create-post');
  const formik = useFormik({
    initialValues: {
      content: '',
    },
    validationSchema: Yup.object({
      content: Yup.string().required(),
    }),
    onSubmit: async ({ content }) => {
      if (image) {
        await createPost({ content, image });
        setImage(null);
        formik.resetForm();
        router.back();
      }
    },
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
  });

  return (
    <>
      {isOpen && (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-screen bg-neutral-500 bg-opacity-50 backdrop-blur-sm">
          <div className="w-full h-screen p-5 bg-white dark:bg-black max-w-3xl md:h-auto md:rounded md:p-8">
            <div className="flex justify-between items-center">
              <button onClick={() => router.back()} className="md:invisible">
                <ArrowLeftIcon />
              </button>
              <h1 className="text-xl font-medium tracking-widest uppercase">
                create post
              </h1>
              <button
                onClick={() => router.back()}
                className="invisible md:visible"
              >
                <XIcon isBig />
              </button>
            </div>
            <form
              onSubmit={formik.handleSubmit}
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
                <label htmlFor="content" className="mb-2">
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  onChange={formik.handleChange}
                  value={formik.values.content}
                  className="resize-none bg-neutral-100 dark:bg-neutral-500 rounded-sm p-2 h-24"
                  placeholder="Type content ..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary w-full p-2 rounded-sm text-white dark:black xs:w-fit xs:px-20"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
