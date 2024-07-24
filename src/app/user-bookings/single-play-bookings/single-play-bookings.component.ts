import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-play-bookings',
  templateUrl: './single-play-bookings.component.html',
  styleUrls: ['./single-play-bookings.component.css']
})
export class SinglePlayBookingsComponent {

  bookingForm!: FormGroup;
  timeSlots = ['07:00 AM - 08:00 AM','08:00 AM - 09:00 AM','09:00 AM - 10:00 AM','10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 01:00 PM', '01:00 PM - 02:00 PM', '02:00 PM - 03:00 PM', '03:00 PM - 04:00 PM', '04:00 PM - 05:00 PM', '05:00 PM - 06:00 PM', '06:00 PM - 07:00 PM', '07:00 PM - 08:00 PM', '08:00 PM - 09:00 PM', '09:00 PM - 10:00 PM', '10:00 PM - 11:00PM'];
  selectedSlot: string | null = null;
  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  bookingSummary: any = {};
  showModal: boolean = false;
  bookedSlots = ['08:00 AM - 09:00 AM','11:00 AM - 12:00 PM','01:00 PM - 02:00 PM','04:00 PM - 05:00 PM', '07:00 PM - 08:00 PM','02:00 PM - 03:00 PM'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      date: ['', Validators.required],
      ground: ['', Validators.required],
      hours: [1, Validators.required], // Default to 1 hour
      totalrate: [500],
      rate:[500],
      name: ['', Validators.required]
    });
    this.bookingForm?.get('rate')?.setValue(500);
    this.bookingForm?.get('hours')?.valueChanges.subscribe(value => {
      const rate = 500 * value;
      this.bookingForm?.get('totalrate')?.setValue(rate);
    });
  }

  selectSlot(slot: string): void {
    this.selectedSlot = slot;
  }

  onSubmit(): void {
    if (this.bookingForm.valid && this.selectedSlot) {
      const hours = this.bookingForm.value.hours;
      const amount = hours * 500;

      this.bookingSummary = {
        date: this.bookingForm.value.date,
        ground: this.bookingForm.value.ground,
        timeSlot: this.selectedSlot,
        hours: hours,
        amount: amount,
        name: this.bookingForm.value.name,
        paymentStatus: 'pending' // Set to 'pending' or 'paid' based on payment status
      };
      this.showModal = true;
    }
  }

  closeModal(): void {
    this.showModal = false;
  }

  makePayment(): void {
    // Handle payment logic here
    this.showModal = false;
  }
}
