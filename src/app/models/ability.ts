import { Species } from './species';

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}
