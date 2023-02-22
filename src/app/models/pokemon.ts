import { Ability } from './ability';
import { GameIndex } from './game-index';
import { Move } from './move';
import { Species } from './species';
import { Sprites } from './sprites';
import { Stat } from './stat';
import { Type } from './type';

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
