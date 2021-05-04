import * as Yup from 'yup';
export const initialValues = {
  email: '',
  password: '',
};
export const validationSchema = Yup.object({
  email: Yup.string()
    .required('Email is a required field !')
    .email('Email format is unvalid'),
  password: Yup.string().required('Password is a required field !'),
});
