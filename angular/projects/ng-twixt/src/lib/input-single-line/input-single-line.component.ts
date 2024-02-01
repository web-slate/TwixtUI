import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-single-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-single-line.component.html',
  styleUrls: ['./input-single-line.component.css']
})
export class InputSingleLineComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() error: string = '';
  @Input() warning: string = '';

  @Output() valueChange = new EventEmitter<string>();
  @Output() blur = new EventEmitter<void>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }

  onInputBlur() {
    this.blur.emit();
  }

  getInputClass(): string {
    return `${
      this.error ? 'border-red-500' : (this.warning ? 'border-yellow-500' : 'border-gray-300')
    } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;
    // Add dark mode classes if needed
  }
}
