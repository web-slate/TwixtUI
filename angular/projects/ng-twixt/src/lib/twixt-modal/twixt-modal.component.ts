import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-twixt-modal',
  standalone: true,
  imports: [],
  templateUrl: './twixt-modal.component.html',
  styleUrls: ['./twixt-modal.component.css'] // If you have specific styles
})
export class TwixtModalComponent {
  @Input() title = '';

  // Use ContentChild for content projection of dynamic templates
  @ContentChild('modalBody', { static: true }) modalBody: TemplateRef<any>;
  @ContentChild('modalFooter', { static: true }) modalFooter: TemplateRef<any>;
}
