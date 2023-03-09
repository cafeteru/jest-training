import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { GetDescriptionPipe } from '../../pipes/get-description.pipe';
import { GetNamePipe } from '../../pipes/get-name.pipe';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { MockPokemonService } from '../../mocks/mock-pokemon-service';
import { PokemonService } from '../../services/pokemon.service';
import { GetImagePipe } from '../../pipes/get-image.pipe';
import { Pokemon } from '../../models/pokemon';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  const mockPokemonService = new MockPokemonService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PokemonDetailsComponent,
        GetNamePipe,
        GetDescriptionPipe,
        GetImagePipe,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        NzLayoutModule,
        NzTableModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '25' } } },
        },
        {
          provide: PokemonService,
          useValue: mockPokemonService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getClass', () => {
    it('should return electric', () => {
      component.pokemon = {
        types: [
          {
            type: {
              name: 'electric',
            },
          },
        ],
      } as Pokemon;
      fixture.detectChanges();
      expect(component.getClass).toEqual('electric');
      expect(fixture.nativeElement.querySelector('.electric')).toBeTruthy();
    });

    it('should return empty string', () => {
      component.pokemon = {} as Pokemon;
      fixture.detectChanges();
      expect(component.getClass).toEqual('');
      expect(fixture.nativeElement.querySelector('.water')).toBeFalsy();
    });

    it('should return empty string when types is null', () => {
      component.pokemon = {
        types: null,
      } as Pokemon;
      fixture.detectChanges();
      expect(component.getClass).toEqual('');
      expect(fixture.nativeElement.querySelector('.fire')).toBeFalsy();
    });

    it('should return empty string when types is empty', () => {
      component.pokemon = {
        types: [],
      } as unknown as Pokemon;
      fixture.detectChanges();
      expect(component.getClass).toEqual('');
      expect(fixture.nativeElement.querySelector('.fire')).toBeFalsy();
    });
  });
});
