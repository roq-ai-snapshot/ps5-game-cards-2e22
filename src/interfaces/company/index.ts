import { GameCardInterface } from 'interfaces/game-card';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  game_card?: GameCardInterface[];

  _count?: {
    game_card?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  name?: string;
  tenant_id?: string;
}
