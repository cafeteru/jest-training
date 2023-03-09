import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-pokemon-card-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon = {} as Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.pokemonService
        .getById(id)
        .pipe(untilDestroyed(this))
        .subscribe((pokemon) => {
          this.pokemon = pokemon;
        });
    }
  }

  get getClass(): string {
    if (this.pokemon) {
      const { types } = this.pokemon;
      if (types && types.length > 0) {
        return types[0].type?.name;
      }
    }
    return '';
  }
}
