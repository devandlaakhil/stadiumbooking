import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {

  @Input() showModal: boolean = false;
  @Input() bookingSummary: any;
  @Output() onClose = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();

  constructor(private route: Router){}
  close(): void {
    this.onClose.emit();
  }

  confirm(): void {
    this.route.navigate(['payments']);
  }
}
