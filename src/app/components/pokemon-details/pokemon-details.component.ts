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
    const id = this.route.snapshot.paramMap.get('id');
    console.warn(id); // todo change to execute service here
    const { pokemon } = this.route.snapshot.data;
    this.pokemon = pokemon;
  }
}
