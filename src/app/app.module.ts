import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserEntryModule } from './user-entry/user-entry.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserBookingsModule } from './user-bookings/user-bookings.module';
import { PaymentsModule } from './payments/payments.module';
import { InfraModule } from './infra/infra.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserEntryModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule,
    HttpClientModule,
    RouterModule,
    UserBookingsModule,
    PaymentsModule,
    InfraModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
