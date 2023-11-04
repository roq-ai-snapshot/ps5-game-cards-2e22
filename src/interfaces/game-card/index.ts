import { CollectionCardInterface } from 'interfaces/collection-card';
import { TransactionInterface } from 'interfaces/transaction';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface GameCardInterface {
  id?: string;
  name: string;
  description?: string;
  user_id: string;
  company_id: string;
  release_date?: any;
  genre?: string;
  rating?: number;
  created_at?: any;
  updated_at?: any;
  collection_card?: CollectionCardInterface[];
  transaction?: TransactionInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    collection_card?: number;
    transaction?: number;
  };
}

export interface GameCardGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
  company_id?: string;
  genre?: string;
}
