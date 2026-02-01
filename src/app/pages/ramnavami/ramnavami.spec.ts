import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ramnavami } from './ramnavami';

describe('Ramnavami', () => {
  let component: Ramnavami;
  let fixture: ComponentFixture<Ramnavami>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ramnavami]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ramnavami);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
