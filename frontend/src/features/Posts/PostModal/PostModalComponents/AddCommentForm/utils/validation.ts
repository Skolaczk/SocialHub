import * as Yup from 'yup';

export const initialValues = {
  comment: '',
};

export const validationSchema = Yup.object({
  comment: Yup.string().required(),
});
