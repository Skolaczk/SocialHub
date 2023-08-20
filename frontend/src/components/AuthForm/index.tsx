'use client';

import { FormField } from '../FormField';
import { useFormik } from 'formik';
import { login } from '@/services';
import { useRouter } from 'next/navigation';
import { getValidationSchema, initialValues, setTokenToCookies } from './utils';
import { useState } from 'react';

interface IProps {
  isSignUp: boolean;
}

export const AuthForm = ({ isSignUp }: IProps) => {
  const router = useRouter();
  const [error, setError] = useState('');
  const { handleSubmit, values, handleChange, errors, touched, resetForm } =
    useFormik({
      initialValues,
      validationSchema: getValidationSchema(isSignUp),
      onSubmit: async (body) => {
        const { data, error } = await login(isSignUp, body);
        if (data) {
          setTokenToCookies(data.access_token);
          router.push('/');
        }

        if (error) {
          setError(error.message);
        }
      },
    });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <FormField
        type="text"
        label="email"
        value={values.email}
        onChange={handleChange}
        error={touched.email && errors.email}
      />
      {isSignUp && (
        <FormField
          type="text"
          label="username"
          value={values.username}
          onChange={handleChange}
          error={touched.username && errors.username}
        />
      )}
      <FormField
        type="password"
        label="password"
        value={values.password}
        onChange={handleChange}
        error={touched.password && errors.password}
      />
      <button type="submit" className="bg-primary p-2 rounded-sm mt-5 mb-3">
        {isSignUp ? 'Register' : 'Login'}
      </button>
      {error && <p className="text-center text-danger">{error}</p>}
    </form>
  );
};
