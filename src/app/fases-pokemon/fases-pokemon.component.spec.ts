import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasesPokemonComponent } from './fases-pokemon.component';

describe('FasesPokemonComponent', () => {
  let component: FasesPokemonComponent;
  let fixture: ComponentFixture<FasesPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasesPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasesPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
