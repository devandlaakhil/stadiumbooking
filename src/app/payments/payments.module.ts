import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payments-routing.module';
import { BookingPaymentsComponent } from './booking-payments/booking-payments.component';
import { ReceiptComponent } from './receipt/receipt.component';



@NgModule({
  declarations: [
    BookingPaymentsComponent,
    ReceiptComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentsModule { }
