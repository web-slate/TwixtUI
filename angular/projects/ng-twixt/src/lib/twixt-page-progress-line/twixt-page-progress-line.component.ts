
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './twixt-page-progress-line.component.html',
  styleUrl: './twixt-page-progress-line.component.css'
})
export class TwixtPageProgressLineComponent implements OnInit, OnDestroy {
  loadingColor = '#3490dc';
  completionColor = '#38c172';
  width = 10;
  isVisible = true;
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.width += 10;
      if (this.width >= 100) {
        clearInterval(this.interval);
        setTimeout(() => this.isVisible = false, 250);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getBackgroundColor(): string {
    return this.width < 100 ? this.loadingColor : this.completionColor;
  }
}
