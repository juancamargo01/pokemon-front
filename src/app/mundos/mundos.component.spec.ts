import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MundosComponent } from './mundos.component';

describe('MundosComponent', () => {
  let component: MundosComponent;
  let fixture: ComponentFixture<MundosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MundosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MundosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
