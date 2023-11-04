import * as yup from 'yup';

export const collectionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  total_cards: yup.number().integer().nullable(),
  total_value: yup.number().integer().nullable(),
  average_rating: yup.number().integer().nullable(),
  last_updated_card: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
