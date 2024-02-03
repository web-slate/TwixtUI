import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-twixt-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './twixt-checkbox.component.html',
  styleUrls: ['./twixt-checkbox.component.css'] // If you have specific styles
})
export class TwixtCheckboxComponent {
  isChecked = false;

  @Output() onChange = new EventEmitter<boolean>();

  handleCheckboxChange(): void {
    this.isChecked = !this.isChecked;
    this.onChange.emit(this.isChecked);
  }
}
