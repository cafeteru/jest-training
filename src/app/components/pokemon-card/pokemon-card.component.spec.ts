import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { GetDescriptionPipe } from '../../pipes/get-description.pipe';
import { GetNamePipe } from '../../pipes/get-name.pipe';
import { GetImagePipe } from '../../pipes/get-image.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('PokemonComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PokemonCardComponent,
        GetDescriptionPipe,
        GetNamePipe,
        GetImagePipe,
      ],
      imports: [RouterTestingModule.withRoutes([]), NzCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
