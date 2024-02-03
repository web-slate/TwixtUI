import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtCommentSystemComponent } from './twixt-comment-system.component';

describe('TwixtCommentSystemComponent', () => {
  let component: TwixtCommentSystemComponent;
  let fixture: ComponentFixture<TwixtCommentSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtCommentSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtCommentSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
