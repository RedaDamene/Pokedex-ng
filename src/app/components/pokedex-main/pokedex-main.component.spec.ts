import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexMainComponent } from './pokedex-main.component';

describe('PokedexMainComponent', () => {
  let component: PokedexMainComponent;
  let fixture: ComponentFixture<PokedexMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexMainComponent]
    });
    fixture = TestBed.createComponent(PokedexMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
