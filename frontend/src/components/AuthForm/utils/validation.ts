import * as Yup from 'yup';

const regex = {
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).+$/,
};

export const initialValues = {
  email: '',
  username: '',
  password: '',
};

export const getValidationSchema = (isSignUp: boolean) => {
  return Yup.object({
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
  });
};
