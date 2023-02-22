import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router
} from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsResolver implements Resolve<Observable<Pokemon | null>> {
  constructor(private pokemonService: PokemonService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon | null> {
    const id = Number(route.paramMap.get('id'));
    return this.pokemonService.getById(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/').then();
        return of(null);
      })
    );
  }
}
