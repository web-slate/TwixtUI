import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-single-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-single-line.component.html',
  styleUrls: ['./input-single-line.component.scss']
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
    return `shadow appearance-none border ${
      this.error ? 'border-red-500' : (this.warning ? 'border-yellow-500' : 'border-gray-300')
    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`;
    // Add dark mode classes if needed
  }
}
