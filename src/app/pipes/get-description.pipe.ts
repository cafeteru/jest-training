import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { firstLetterUppercase } from './utils-pipe';

@Pipe({
  name: 'getDescription',
})
export class GetDescriptionPipe implements PipeTransform {
  transform(pokemon: Pokemon | undefined | null): string {
    if (pokemon) {
      let description = '';
      const { types } = pokemon;
      if (types) {
        types.forEach((type) => {
          const typeName = firstLetterUppercase(type.type.name);
          description += `${typeName} - `;
        });
        return description.substring(0, description.length - 3);
      }
    }
    return '';
  }
}
