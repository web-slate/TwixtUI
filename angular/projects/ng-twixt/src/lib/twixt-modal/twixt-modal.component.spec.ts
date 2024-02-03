import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtModalComponent } from './twixt-modal.component';

describe('TwixtModalComponent', () => {
  let component: TwixtModalComponent;
  let fixture: ComponentFixture<TwixtModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
