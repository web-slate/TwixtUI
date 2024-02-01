import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTwixtComponent } from './ng-twixt.component';

describe('NgTwixtComponent', () => {
  let component: NgTwixtComponent;
  let fixture: ComponentFixture<NgTwixtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTwixtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgTwixtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
