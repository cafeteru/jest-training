import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Pokemon } from '../models/pokemon';

describe('PokemonService', () => {
  let service: PokemonService;
  let mockHttp: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    mockHttp.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a pokemon', (done) => {
    const id = 25;
    const pokemon = {
      id,
      name: 'pikachu',
    } as Pokemon;
    service.getById(id).subscribe({
      next: (pokemon) => {
        expect(pokemon.id).toEqual(id);
        done();
      },
      error: (err) => fail(err),
    });
    const req = mockHttp.expectOne(`${service.url}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(pokemon);
  });
});
