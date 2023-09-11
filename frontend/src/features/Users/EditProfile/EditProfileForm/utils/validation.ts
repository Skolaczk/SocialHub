import * as Yup from 'yup';

export const validationSchema = Yup.object({
  username: Yup.string()
    .min(5, 'Username is too short')
    .max(30, 'Username is too long')
    .required('Username field is required'),
  bio: Yup.string().required('Bio field is required'),
});
