import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-card-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  pokemon: Pokemon;

  constructor(private route: ActivatedRoute) {
    const { pokemon } = this.route.snapshot.data;
    this.pokemon = pokemon;
    this.pokemon.moves[0].move.url;
  }
}
