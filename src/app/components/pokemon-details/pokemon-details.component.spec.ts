import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Pokemon } from 'src/app/models/pokemon';
import { GetDescriptionPipe } from '../../pipes/get-description.pipe';
import { GetNamePipe } from '../../pipes/get-name.pipe';
import { PokemonDetailsComponent } from './pokemon-details.component';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  const pokemon: Pokemon = {
    name: 'pikachu',
    types: [
      {
        type: {
          name: 'electric',
        },
      },
    ],
    sprites: {
      front_default: '25.png',
    },
  } as Pokemon;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailsComponent, GetNamePipe, GetDescriptionPipe],
      imports: [RouterTestingModule.withRoutes([]), NzLayoutModule, NzTableModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: { pokemon }
            }
          },
        }
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
