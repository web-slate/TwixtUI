import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtHeadingComponent } from './twixt-heading.component';

describe('TwixtHeadingComponent', () => {
  let component: TwixtHeadingComponent;
  let fixture: ComponentFixture<TwixtHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
