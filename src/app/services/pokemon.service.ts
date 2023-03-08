import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.url}/${id}`);
  }
}
