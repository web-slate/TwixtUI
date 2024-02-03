import { Component, Input } from '@angular/core';

@Component({
  selector: 'twixt-alert',
  standalone: true,
  imports: [],
  templateUrl: './twixt-alert.component.html',
  styleUrls: ['./twixt-alert.component.css'] // if you have specific styles
})
export class TwixtAlertComponent {
  @Input() overwriteClass: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';

  get alertClasses(): string {
    return this.overwriteClass ? this.overwriteClass : 'bg-orange-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-2';
  }
}
