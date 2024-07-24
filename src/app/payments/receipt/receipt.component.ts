import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {

  constructor(private route : Router){}

  ngOnInit() {
  }

  backtoHome(){
    this.route.navigate(['home']);
  }
}
