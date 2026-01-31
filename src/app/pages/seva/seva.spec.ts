import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seva } from './seva';

describe('Seva', () => {
  let component: Seva;
  let fixture: ComponentFixture<Seva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
