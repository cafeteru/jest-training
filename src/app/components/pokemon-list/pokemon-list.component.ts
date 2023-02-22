import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { concatMap, from, map, toArray } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-pokemon-card-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons = [];
    const pokemonIds = Array.from(Array(150).keys());
    from(pokemonIds)
      .pipe(
        concatMap((id) =>
          this.pokemonService.getById(id + 1).pipe(
            map((pokemon) => {
              this.pokemons.push(pokemon);
            })
          )
        ),
        toArray(),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
