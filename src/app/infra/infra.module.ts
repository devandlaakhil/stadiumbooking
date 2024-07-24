import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraRoutingModule } from './infra-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    InfraRoutingModule
  ]
})
export class InfraModule { }
