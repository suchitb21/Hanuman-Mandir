import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temple } from './temple';

describe('Temple', () => {
  let component: Temple;
  let fixture: ComponentFixture<Temple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Temple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Temple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
