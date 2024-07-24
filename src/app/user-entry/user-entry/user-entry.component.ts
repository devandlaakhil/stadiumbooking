import { Component, OnInit,  } from '@angular/core';
import {MessageServiceService} from '../../common-services/message-service.service'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { OptverificationComponent } from '../optverification/optverification.component';
import { UserRegistrationService } from 'src/app/common-services/user-registration.service';


@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css'],
  providers: [DialogService]  
})
export class UserEntryComponent implements OnInit {

  activeTab: string = 'user';
  emailrphone: string = '';
  adminUsername: string = '';
  adminPassword: string = '';

  constructor( private notification: MessageServiceService,
    public dialogService: DialogService, private registerService: UserRegistrationService
  ) { }

  ref: DynamicDialogRef | undefined;

  ngOnInit(): void {
  }


  onUserSubmit(){
    this.mobilerEmail(this.emailrphone);
  }
  mobilerEmail(e:string): void {
    const mobileRegex = /^\+91[6-9]\d{9}$/;
    if(mobileRegex.test(e)){
      this.sendData(this.emailrphone);  // send data to service for further processing.
      this.notification.showSuccess('Success', `OTP sent successfully to ${this.emailrphone}`);
      this.showOTPDialog();
    }else if(e.includes('@') && e.endsWith('.com')){
      this.notification.showSuccess('Success', `OTP sent successfully to ${this.emailrphone}`);
    }else{
      this.notification.showError('Error', 'Invalid email or phone number');  
    }
    this.emailrphone = '';
  }

  selectTab(tab: string) {
    this.activeTab = tab;
  }
  onAdminSubmit() {
    // Handle admin form submission
    console.log('Admin form submitted with:', this.adminUsername, this.adminPassword);
  }

  sendData(data: string) {
    this.registerService.changeMobileNumber(data);
  }
  showOTPDialog(){
    this.ref = this.dialogService.open(OptverificationComponent, {
      data: {
        emailrphone: this.emailrphone
      },
      header: 'OTP Verification',
      width: '800px',
      height: '400px',
      closable: false,
      modal: true,
      contentStyle: { 'max-width': '100%', 'max-height': '100%', 'overflow': 'hide' }   
    });
  }
}
