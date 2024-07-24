import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {UserEntryApiService} from '../userEntry-api-services/user-entry-api.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { HttpHeaders } from '@angular/common/http';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ActivatedRoute,Router } from '@angular/router';
import {MessageServiceService} from '../../common-services/message-service.service'

@Component({
  selector: 'app-optverification',
  templateUrl: './optverification.component.html',
  styleUrls: ['./optverification.component.css']
})

export class OptverificationComponent implements OnInit {

  otp:string[] = ['','','','','',''];
  @ViewChild('otp1Input') otp1Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp2Input') otp2Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp3Input') otp3Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp4Input') otp4Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp5Input') otp5Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp6Input') otp6Input!: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2, private apiServices: UserEntryApiService,
    public config: DynamicDialogConfig,private route: Router,public dialogRef: DynamicDialogRef,
    private notification: MessageServiceService,) { }

  ngOnInit(): void {
  }

  onOtpInput(input: HTMLInputElement, index: number) {
    const value = input.value;
    if (value && value.length === 1) {
      this.otp[index - 1] = value;
      if (index < this.otp.length) {
        const nextInput = this.getNextInput(index);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }

  getNextInput(index: number): HTMLInputElement | null {
    switch (index) {
      case 1: return this.otp2Input.nativeElement;
      case 2: return this.otp3Input.nativeElement;
      case 3: return this.otp4Input.nativeElement;
      case 4: return this.otp5Input.nativeElement;
      case 5: return this.otp6Input.nativeElement;
      default: return null;
    }
  }

  onSubmit() {
    const completeOtp: string = this.otp.join('');
    let userdata: any = {
      "emailrphone": this.config.data.emailrphone,
      "otp": completeOtp
    };
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
    let queryString = Object.keys(userdata).map(key => `${key}=${userdata[key]}`).join('&');
    this.apiServices.get(`login?${queryString}`, { headers: headers }).subscribe(
      (response) => {
        if(response === false) {
          this.dialogRef.close();
          this.route.navigate(['registration']);
        }else if(response === 'invalidOTP') {
          this.notification.showError('warning', 'Invalid OTP'); 
        }else{
          this.dialogRef.close();
          this.route.navigate(['bookingDashBoard']);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  close(){
    this.dialogRef.close();
  }
  

}
