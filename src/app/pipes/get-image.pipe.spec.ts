import { GetImagePipe } from './get-image.pipe';
import { Pokemon } from '../models/pokemon';

describe('GetImagePipe', () => {
  const pipe = new GetImagePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string when pokemon is undefined', () => {
    expect(pipe.transform(undefined)).toEqual('');
  });

  it('should return empty string when pokemon is null', () => {
    expect(pipe.transform(null)).toEqual('');
  });

  it('should return the image when pokemon has sprites', () => {
    const front_default = 'image.png';
    const pokemon = {
      sprites: {
        front_default,
      },
    } as Pokemon;
    expect(pipe.transform(pokemon)).toEqual(front_default);
  });
});
