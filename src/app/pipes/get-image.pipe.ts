import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'getImage',
})
export class GetImagePipe implements PipeTransform {
  transform(pokemon: Pokemon | null | undefined): string {
    if (pokemon) {
      const { sprites } = pokemon;
      if (sprites) {
        return pokemon.sprites.front_default;
      }
    }
    return '';
  }
}
