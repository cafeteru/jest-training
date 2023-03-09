import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { MockPokemonService } from '../../mocks/mock-pokemon-service';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { GetDescriptionPipe } from '../../pipes/get-description.pipe';
import { GetNamePipe } from '../../pipes/get-name.pipe';
import { NzCardModule } from 'ng-zorro-antd/card';
import { GetImagePipe } from '../../pipes/get-image.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { Pokemon } from '../../models/pokemon';
import { of } from 'rxjs';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  const mockPokemonService = new MockPokemonService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PokemonListComponent,
        PokemonCardComponent,
        GetImagePipe,
        GetDescriptionPipe,
        GetNamePipe,
      ],
      imports: [RouterTestingModule.withRoutes([]), NzCardModule],
      providers: [
        {
          provide: PokemonService,
          useValue: mockPokemonService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 150 pokemons', () => {
    const pikachu = {
      id: 25,
      name: 'Pikachu',
    } as Pokemon;
    const spy = jest
      .spyOn(mockPokemonService, 'getById')
      .mockImplementation(() => of(pikachu));
    component.ngOnInit();
    expect(component.pokemons.length).toEqual(150);
    expect(spy).toHaveBeenCalledTimes(150);
    component.pokemons.forEach((pokemon) => expect(pokemon).toEqual(pikachu));
  });
});
