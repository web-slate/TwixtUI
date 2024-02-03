import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtLoadingPostCardComponent } from './twixt-loading-post-card.component';

describe('TwixtLoadingPostCardComponent', () => {
  let component: TwixtLoadingPostCardComponent;
  let fixture: ComponentFixture<TwixtLoadingPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtLoadingPostCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtLoadingPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
