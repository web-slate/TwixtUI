import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtAlertComponent } from './twixt-alert.component';

describe('TwixtAlertComponent', () => {
  let component: TwixtAlertComponent;
  let fixture: ComponentFixture<TwixtAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
