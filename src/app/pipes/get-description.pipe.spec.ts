import { Pokemon } from '../models/pokemon';
import { GetDescriptionPipe } from './get-description.pipe';

describe('GetDescriptionPipe', () => {
  const pipe = new GetDescriptionPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string when pokemon is null', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('should return empty string when pokemon is undefined', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should return the type when pokemon has one type', () => {
    const pokemon = {
      types: [{ type: { name: 'fire' } }],
    } as Pokemon;
    expect(pipe.transform(pokemon)).toBe('Fire');
  });

  it('should return the types when pokemon has two types', () => {
    const pokemon = {
      types: [{ type: { name: 'fire' } }, { type: { name: 'water' } }],
    } as Pokemon;
    expect(pipe.transform(pokemon)).toBe('Fire - Water');
  });
});
