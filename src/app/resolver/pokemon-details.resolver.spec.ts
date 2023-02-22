import { TestBed } from '@angular/core/testing';

import { PokemonDetailsResolver } from './pokemon-details.resolver';

describe('PokemonDetailsResolver', () => {
  let resolver: PokemonDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PokemonDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
