import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtHeaderComponent } from './twixt-header.component';

describe('TwixtHeaderComponent', () => {
  let component: TwixtHeaderComponent;
  let fixture: ComponentFixture<TwixtHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
