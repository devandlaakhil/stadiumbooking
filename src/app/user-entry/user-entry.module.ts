import { NgModule } from '@angular/core';
import {UserEntryRoutingModule} from './user-entry-routing.module';
import { CommonModule } from '@angular/common';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OptverificationComponent } from './optverification/optverification.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UserEntryComponent,
    OptverificationComponent,
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserEntryRoutingModule,
    ToastModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  exports: [UserEntryComponent]
})
export class UserEntryModule { }
