import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtPageProgressLineComponent } from './twixt-page-progress-line.component';

describe('TwixtPageProgressLineComponent', () => {
  let component: TwixtPageProgressLineComponent;
  let fixture: ComponentFixture<TwixtPageProgressLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtPageProgressLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtPageProgressLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
