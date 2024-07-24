import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserBookingsRoutingModule } from './user-bookings-routing.module';
import { UserBookingDashboardComponent } from './user-booking-dashboard/user-booking-dashboard.component';
import { SinglePlayBookingsComponent } from './single-play-bookings/single-play-bookings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MemebershipRegistrationComponent } from './memebership-registration/memebership-registration.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    UserBookingDashboardComponent,
    SinglePlayBookingsComponent,
    ConfirmationModalComponent,
    MemebershipRegistrationComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    UserBookingsRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserBookingsModule { }
