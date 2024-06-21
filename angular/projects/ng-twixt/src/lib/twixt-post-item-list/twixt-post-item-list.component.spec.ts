import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwixtPostItemListComponent } from './twixt-post-item-list.component';

describe('TwixtPostItemListComponent', () => {
  let component: TwixtPostItemListComponent;
  let fixture: ComponentFixture<TwixtPostItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwixtPostItemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwixtPostItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
