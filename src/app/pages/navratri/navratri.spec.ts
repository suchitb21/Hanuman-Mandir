import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navratri } from './navratri';

describe('Navratri', () => {
  let component: Navratri;
  let fixture: ComponentFixture<Navratri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navratri]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navratri);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
