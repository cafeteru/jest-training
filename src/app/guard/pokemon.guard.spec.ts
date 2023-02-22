import { TestBed } from '@angular/core/testing';

import { PokemonGuard } from './pokemon.guard';

describe('PokemonGuard', () => {
  let guard: PokemonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PokemonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
