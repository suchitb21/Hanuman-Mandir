import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mahashivratri } from './mahashivratri';

describe('Mahashivratri', () => {
  let component: Mahashivratri;
  let fixture: ComponentFixture<Mahashivratri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mahashivratri]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mahashivratri);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
