import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureActiveDetailComponent } from './feature-active-detail.component';

describe('FeatureActiveDetailComponent', () => {
  let component: FeatureActiveDetailComponent;
  let fixture: ComponentFixture<FeatureActiveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureActiveDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureActiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
