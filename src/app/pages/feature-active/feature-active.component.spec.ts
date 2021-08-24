import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureActiveComponent } from './feature-active.component';

describe('FeatureActiveComponent', () => {
  let component: FeatureActiveComponent;
  let fixture: ComponentFixture<FeatureActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
