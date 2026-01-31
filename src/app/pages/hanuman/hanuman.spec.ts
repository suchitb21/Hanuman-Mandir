import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hanuman } from './hanuman';

describe('Hanuman', () => {
  let component: Hanuman;
  let fixture: ComponentFixture<Hanuman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hanuman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hanuman);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
