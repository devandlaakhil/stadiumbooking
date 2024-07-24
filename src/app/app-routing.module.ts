import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEntryComponent } from './user-entry/user-entry/user-entry.component';

const routes: Routes = [
  { path: '', component: UserEntryComponent,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
