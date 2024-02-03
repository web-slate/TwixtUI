import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtDialogComponent } from './twixt-dialog.component';

describe('TwixtDialogComponent', () => {
  let component: TwixtDialogComponent;
  let fixture: ComponentFixture<TwixtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
