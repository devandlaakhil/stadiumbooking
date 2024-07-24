import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-payments',
  templateUrl: './booking-payments.component.html',
  styleUrls: ['./booking-payments.component.css']
})
export class BookingPaymentsComponent {

  constructor(private router: Router) { }

  ngOnInit() {}

  receipt(){
    this.router.navigate(['receipt']);
  }


}
