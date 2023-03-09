import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';

export class MockPokemonService {
  getById(id: number): Observable<Pokemon> {
    return of({} as Pokemon);
  }
}
