import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-memebership-registration',
  templateUrl: './memebership-registration.component.html',
  styleUrls: ['./memebership-registration.component.css'],
  providers: [DatePipe]
})
export class MemebershipRegistrationComponent {

  startdate:Date = new Date();
  currentDate:any
  constructor(private route : Router, private datepipe : DatePipe) { 
     this.currentDate = this.datepipe.transform(this.startdate, 'yyyy-MM-dd');
  }

  ngonInit() {
  }

  payment(){
    this.route.navigate(['payments']);
  }
}
