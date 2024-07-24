import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptComponent } from './receipt/receipt.component';
import { UserBookingDashboardComponent } from '../user-bookings/user-booking-dashboard/user-booking-dashboard.component'

const routes: Routes = [
  {path: 'receipt', component: ReceiptComponent},
  {path: 'home', component:UserBookingDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
