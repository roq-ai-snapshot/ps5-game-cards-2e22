import { CollectionInterface } from 'interfaces/collection';
import { GameCardInterface } from 'interfaces/game-card';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CollectionCardInterface {
  id?: string;
  collection_id: string;
  game_card_id: string;
  added_at?: any;
  user_id: string;
  purchase_price?: number;
  current_value?: number;
  condition?: string;
  rating?: number;
  created_at?: any;
  updated_at?: any;

  collection?: CollectionInterface;
  game_card?: GameCardInterface;
  user?: UserInterface;
  _count?: {};
}

export interface CollectionCardGetQueryInterface extends GetQueryInterface {
  id?: string;
  collection_id?: string;
  game_card_id?: string;
  user_id?: string;
  condition?: string;
}
