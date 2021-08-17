import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillingnessLearnComponent } from './willingness-learn.component';

describe('WillingnessLearnComponent', () => {
  let component: WillingnessLearnComponent;
  let fixture: ComponentFixture<WillingnessLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillingnessLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillingnessLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
