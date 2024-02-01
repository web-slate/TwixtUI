import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSingleLineComponent } from './input-single-line.component';

describe('InputSingleLineComponent', () => {
  let component: InputSingleLineComponent;
  let fixture: ComponentFixture<InputSingleLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSingleLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputSingleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
