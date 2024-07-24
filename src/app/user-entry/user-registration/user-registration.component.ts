import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { UserEntryApiService } from '../userEntry-api-services/user-entry-api.service';
import {UserRegistrationService} from '../../common-services/user-registration.service';
import { MessageServiceService } from '../../common-services/message-service.service'


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  name:string = '';
  activeTab: string = 'user';
  userInfo:any = {};
  registrationForm!: FormGroup;
  adminRegistrationForm!: FormGroup;
  currentMobile :string = '';

  constructor(private apiServices:UserEntryApiService,private fb: FormBuilder,
    private userRegistrationService:UserRegistrationService, private router:Router,
    private notification: MessageServiceService
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: [''],
      fullname: [''],
      address: [''],
      dob: [''],
      email: [''],
      gender: [''],
      mobile: [''],
      role: ['user'],
      state: ['']
    });
    this.userRegistrationService.currentMobileNumber.subscribe(data => {
      this.currentMobile = data;
      this.registrationForm.patchValue({
        mobile: this.currentMobile
      });
    })

    this.adminRegistrationForm = this.fb.group({
      name: ['', Validators.required],
      fullname: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [{ value: '', disabled: true }],
      state: ['', Validators.required],
      securityAnswer: [{ value: '', disabled: true }],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }
  onSubmit(): void {
    const userInfo = this.registrationForm.value;
    this.apiServices.post('SignUp', userInfo).subscribe(
      (response) => {
        if(response){
          //it need verify directly going to bookingDashBoard
          this.notification.showSuccess('success','user registration successfully completed')
          this.registrationForm.reset();
          this.router.navigate(['bookingDashBoard']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onAdminSubmit(): void {
    // Handle admin form submission
  }

  selectTab(tab: string) {
    this.activeTab = tab;
  }
  // onSubmit(event: any): void{
  //   this.userInfo = {
  //     name : event.name,
  //     fullname : event.fullname,
  //     address : event.address,
  //     dob : event.dob,
  //     email:event.email,
  //     gender : event.gender,
  //    mobile: event.mobile,
  //    role : event.role,
  //    state : event.State
  //   }
  //   this.apiServices.post('SignUp',this.userInfo).subscribe(
  //     (response) => {
      
  //   },
  //   (error) => {
  //     console.log(error);
  //   });
  // }
}
