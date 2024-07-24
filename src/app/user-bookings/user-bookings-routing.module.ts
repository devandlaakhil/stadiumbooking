import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePlayBookingsComponent } from './single-play-bookings/single-play-bookings.component';
import {BookingPaymentsComponent } from '../payments/booking-payments/booking-payments.component';
import { MemebershipRegistrationComponent } from './memebership-registration/memebership-registration.component';
import { ReceiptComponent } from '../payments/receipt/receipt.component';
import {UserProfileComponent} from '../infra/user-profile/user-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {path: 'gamebooking', component:SinglePlayBookingsComponent,pathMatch:'full'},
  {path: 'payments', component:BookingPaymentsComponent},
  {path: 'membership', component:MemebershipRegistrationComponent},
  {path: 'receipt', component:ReceiptComponent},
  {path: 'profile', component:UserProfileComponent},
  {path: 'dashboard', component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBookingsRoutingModule { }
