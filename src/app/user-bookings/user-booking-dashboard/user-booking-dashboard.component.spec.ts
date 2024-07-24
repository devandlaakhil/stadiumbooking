import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingDashboardComponent } from './user-booking-dashboard.component';

describe('UserBookingDashboardComponent', () => {
  let component: UserBookingDashboardComponent;
  let fixture: ComponentFixture<UserBookingDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookingDashboardComponent]
    });
    fixture = TestBed.createComponent(UserBookingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
