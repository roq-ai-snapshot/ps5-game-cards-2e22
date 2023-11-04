import { CollectionCardInterface } from 'interfaces/collection-card';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CollectionInterface {
  id?: string;
  name: string;
  description?: string;
  user_id: string;
  total_cards?: number;
  total_value?: number;
  average_rating?: number;
  last_updated_card?: any;
  created_at?: any;
  updated_at?: any;
  collection_card?: CollectionCardInterface[];
  user?: UserInterface;
  _count?: {
    collection_card?: number;
  };
}

export interface CollectionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
}
