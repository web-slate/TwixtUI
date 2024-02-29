import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtLeftSidebar } from './twixt-left-sidebar.component';

describe('TwixtLeftSidebar', () => {
  let component: TwixtLeftSidebar;
  let fixture: ComponentFixture<TwixtLeftSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtLeftSidebar]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtLeftSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
