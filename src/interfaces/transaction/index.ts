import { UserInterface } from 'interfaces/user';
import { GameCardInterface } from 'interfaces/game-card';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  user_id: string;
  game_card_id: string;
  transaction_date?: any;
  transaction_type: string;
  transaction_amount: number;
  payment_method?: string;
  billing_address?: string;
  shipping_address?: string;
  status?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  game_card?: GameCardInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  game_card_id?: string;
  transaction_type?: string;
  payment_method?: string;
  billing_address?: string;
  shipping_address?: string;
  status?: string;
}
