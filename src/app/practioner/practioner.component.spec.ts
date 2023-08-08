import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractionerComponent } from './practioner.component';

describe('PractionerComponent', () => {
  let component: PractionerComponent;
  let fixture: ComponentFixture<PractionerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PractionerComponent]
    });
    fixture = TestBed.createComponent(PractionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
