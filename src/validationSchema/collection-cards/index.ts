import * as yup from 'yup';

export const collectionCardValidationSchema = yup.object().shape({
  added_at: yup.date().required(),
  purchase_price: yup.number().integer().nullable(),
  current_value: yup.number().integer().nullable(),
  condition: yup.string().nullable(),
  rating: yup.number().integer().nullable(),
  collection_id: yup.string().nullable().required(),
  game_card_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
