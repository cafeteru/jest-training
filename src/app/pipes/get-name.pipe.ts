import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { firstLetterUppercase } from './utils-pipe';

@Pipe({
  name: 'getName',
})
export class GetNamePipe implements PipeTransform {
  transform(pokemon: Pokemon | undefined | null): string {
    if (pokemon) {
      const { id, name } = pokemon;
      return `${('000' + id).slice(-4)} - ${firstLetterUppercase(name)}`;
    }
    return '';
  }
}
