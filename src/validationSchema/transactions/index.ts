import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  transaction_date: yup.date().required(),
  transaction_type: yup.string().required(),
  transaction_amount: yup.number().integer().required(),
  payment_method: yup.string().nullable(),
  billing_address: yup.string().nullable(),
  shipping_address: yup.string().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  game_card_id: yup.string().nullable().required(),
});
