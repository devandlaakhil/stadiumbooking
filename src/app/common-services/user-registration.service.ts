import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  private mobileNumber  = new BehaviorSubject<string>('');
  currentMobileNumber = this.mobileNumber.asObservable();

  constructor() { }

  changeMobileNumber(newMobileNumber: string){
    this.mobileNumber.next(newMobileNumber);
  }
}
