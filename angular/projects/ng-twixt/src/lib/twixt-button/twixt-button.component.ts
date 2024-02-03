import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'twixt-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './twixt-button.component.html',
  styleUrl: './twixt-button.component.css'
})
export class TwixtButtonComponent {
  @Input() overwriteClass: string = '';
  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    return this.overwriteClass ? this.overwriteClass : 'px-4 py-2 bg-indigo-500 text-white rounded-md';
  }

  handleClick(event: Event): void {
    this.onClick.emit(event);
  }
}
