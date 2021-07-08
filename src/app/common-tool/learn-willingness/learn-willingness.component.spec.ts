import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnWillingnessComponent } from './learn-willingness.component';

describe('LearnWillingnessComponent', () => {
  let component: LearnWillingnessComponent;
  let fixture: ComponentFixture<LearnWillingnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnWillingnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnWillingnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
