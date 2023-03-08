import { inject, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './models/pokemon';
import { catchError, of } from 'rxjs';

export const pokemonDetailsResolver: ResolveFn<Pokemon | null> = (
  route: ActivatedRouteSnapshot
) => {
  const id = route.paramMap.get('id');
  return inject(PokemonService)
    .getById(Number(id))
    .pipe(
      catchError(() => {
        inject(Router).navigateByUrl('/').then();
        return of(null);
      })
    );
};

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: `:id`,
    component: PokemonDetailsComponent,
    resolve: {
      pokemon: pokemonDetailsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
