import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'twixt-heading',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './twixt-heading.component.html',
  styleUrl: './twixt-heading.component.css'
})
export class TwixtHeadingComponent {
  type :string = "h1";
  children : string = "Heading goes here";
}
