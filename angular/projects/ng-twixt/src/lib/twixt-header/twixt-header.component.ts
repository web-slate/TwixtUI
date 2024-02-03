import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwixtAlertComponent } from '../twixt-alert/twixt-alert.component';

@Component({
  selector: 'twixt-header',
  standalone: true,
  imports: [CommonModule, TwixtAlertComponent],
  templateUrl: './twixt-header.component.html',
  styleUrls: ['./twixt-header.component.css'] // Include this only if you have specific styles
})
export class TwixtHeaderComponent {
  @Input() announceMent!: { title: string; desc: string; };
  @Input() headerClass: string = '';
  @Output() onHamburgerClick = new EventEmitter<void>();

  // Use ContentChild for content projection of dynamic templates
  @ContentChild('rightBlock', { static: true }) rightBlock!: TemplateRef<any>;

  handleHamburgerClick(): void {
    this.onHamburgerClick.emit();
  }
}
