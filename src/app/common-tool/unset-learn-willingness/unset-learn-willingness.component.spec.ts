import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsetLearnWillingnessComponent } from './unset-learn-willingness.component';

describe('UnsetLearnWillingnessComponent', () => {
  let component: UnsetLearnWillingnessComponent;
  let fixture: ComponentFixture<UnsetLearnWillingnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsetLearnWillingnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsetLearnWillingnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
