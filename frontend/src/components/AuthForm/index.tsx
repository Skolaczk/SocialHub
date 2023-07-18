'use client';

import { FormField } from '@/components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '@/services';
import { useRouter } from 'next/navigation';
import { useToken } from '@/hooks';

const regex = {
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).+$/,
};

interface IProps {
  isSignUp: boolean;
}

export const AuthForm = ({ isSignUp }: IProps) => {
  const router = useRouter();
  const { setAccessToken } = useToken();
  const { handleSubmit, values, handleChange, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        email: '',
        username: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .matches(regex.EMAIL, 'Invalid email address')
          .required('Email field is required'),
        username: isSignUp
          ? Yup.string()
              .min(5, 'Username is too short')
              .max(30, 'Username is too long')
              .required('Username field is required')
          : Yup.string(),
        password: Yup.string()
          .min(8, 'Password is too short')
          .max(50, 'Password is too long')
          .matches(
            regex.PASSWORD,
            'The password must contain one lowercase, one uppercase letter, a number, or a special character',
          )
          .required('Password field is required'),
      }),
      onSubmit: async (body) => {
        const { access_token } = await login(isSignUp, body);
        setAccessToken(access_token);
        router.push('/');

        resetForm();
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
      <button type="submit" className="bg-primary p-2 rounded-sm my-5">
        {isSignUp ? 'Register' : 'Login'}
      </button>
    </form>
  );
};
