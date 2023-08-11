import * as Yup from 'yup';

export const initialValues = {
  content: '',
};

export const validationSchema = Yup.object({
  content: Yup.string().required(),
});
