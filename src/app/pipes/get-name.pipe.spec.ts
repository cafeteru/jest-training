import { Pokemon } from '../models/pokemon';
import { GetNamePipe } from './get-name.pipe';

describe('GetNamePipe', () => {
  let pipe: GetNamePipe;
  let pokemon: Pokemon;

  beforeEach(() => {
    pipe = new GetNamePipe();
    pokemon = {
      id: 25,
      name: 'Pikachu',
    } as Pokemon;
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Check with undefined', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('Check with null', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('Check with a Pokemon whose id is less than 10', () => {
    pokemon.id = 1;
    expect(pipe.transform(pokemon)).toBe('0001 - Pikachu');
  });

  it('Check with a Pokemon whose id is less than 100', () => {
    pokemon.id = 10;
    expect(pipe.transform(pokemon)).toBe('0010 - Pikachu');
  });

  it('Check with a Pokemon whose id is less than 1000', () => {
    pokemon.id = 100;
    expect(pipe.transform(pokemon)).toBe('0100 - Pikachu');
  });

  it('Check with a Pokemon whose id is less than 10000', () => {
    pokemon.id = 1000;
    expect(pipe.transform(pokemon)).toBe('1000 - Pikachu');
  });
});
