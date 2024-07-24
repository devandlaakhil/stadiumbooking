import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { OptverificationComponent } from './optverification/optverification.component';
import {UserBookingDashboardComponent} from '../user-bookings/user-booking-dashboard/user-booking-dashboard.component';

const routes: Routes = [
  { path: 'registration', component: UserRegistrationComponent},
  {path: 'bookingDashBoard',component:UserBookingDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEntryRoutingModule {}
