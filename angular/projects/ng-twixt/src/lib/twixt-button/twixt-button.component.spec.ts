import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtButtonComponent } from './twixt-button.component';

describe('TwixtButtonComponent', () => {
  let component: TwixtButtonComponent;
  let fixture: ComponentFixture<TwixtButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
