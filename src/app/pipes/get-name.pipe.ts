import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { firstLetterUppercase } from './utils-pipe';

@Pipe({
  name: 'getName',
})
export class GetNamePipe implements PipeTransform {
  transform(pokemon: Pokemon): string {
    if (pokemon) {
      const { id, name } = pokemon;
      return `${('00' + id).slice(-3)} - ${firstLetterUppercase(name)}`;
    }
    return '';
  }
}
