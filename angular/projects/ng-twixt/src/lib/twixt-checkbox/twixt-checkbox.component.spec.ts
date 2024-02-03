import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtCheckboxComponent } from './twixt-checkbox.component';

describe('TwixtCheckboxComponent', () => {
  let component: TwixtCheckboxComponent;
  let fixture: ComponentFixture<TwixtCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
