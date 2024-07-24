import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-user-booking-dashboard',
  templateUrl: './user-booking-dashboard.component.html',
  styleUrls: ['./user-booking-dashboard.component.css']
})

export class UserBookingDashboardComponent {

  isAdmin: boolean = true;
  isMember: boolean = true;

  constructor(private route : Router) {}

  ngOnInit() {}

  gameBooking(){
    this.route.navigate(['/gamebooking']);
  }
  membership(){
    this.route.navigate(['/membership']);
  }

  dashboard(){
    this.route.navigate(['/dashboard'])
  }

  profile(){
    this.route.navigate(['/profile']);
  }
}
