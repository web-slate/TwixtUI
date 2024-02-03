import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'twixt-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './twixt-dialog.component.html',
  styleUrls: ['./twixt-dialog.component.css'] // If you have specific styles
})
export class TwixtDialogComponent {
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() footer: any; // Adjust the type as necessary, e.g., TemplateRef or a specific component type
}
