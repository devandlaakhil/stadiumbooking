import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlayBookingsComponent } from './single-play-bookings.component';

describe('SinglePlayBookingsComponent', () => {
  let component: SinglePlayBookingsComponent;
  let fixture: ComponentFixture<SinglePlayBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePlayBookingsComponent]
    });
    fixture = TestBed.createComponent(SinglePlayBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
