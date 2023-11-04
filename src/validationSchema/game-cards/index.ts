import * as yup from 'yup';

export const gameCardValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  release_date: yup.date().nullable(),
  genre: yup.string().nullable(),
  rating: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
