import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'twixt-left-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './twixt-left-sidebar.component.html',
  styleUrl: './twixt-left-sidebar.component.css'
})
export class TwixtLeftSidebar implements OnInit, OnChanges {
  @Input() overWriteClasses: string | null = null;
  @Input() openDrawer: boolean = false;
  @Output() onBlurEvent = new EventEmitter<void>();

  isOpen: boolean = false;

  ngOnInit(): void {
    this.isOpen = this['openDrawer'];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['openDrawer']) {
      this.isOpen = changes['openDrawer'].currentValue;
    }
  }

  get leftSidebarClass(): string {
    return this.overWriteClasses ? this.overWriteClasses : 'flex w-72 h-full bg-pink-500';
  }

  get sidebarClasses(): string {
    return `transform bg-blue-800 text-white p-6 space-y-6 ${this.isOpen ? 'translate-x-0' : '-translate-x-full'}`;
  }

  onOverlayClick(): void {
    this.onBlurEvent.emit();
    this.isOpen = false;
  }
}