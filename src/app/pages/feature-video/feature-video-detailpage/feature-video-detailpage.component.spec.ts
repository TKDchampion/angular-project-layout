import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureVideoDetailpageComponent } from './feature-video-detailpage.component';

describe('FeatureVideoDetailpageComponent', () => {
  let component: FeatureVideoDetailpageComponent;
  let fixture: ComponentFixture<FeatureVideoDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureVideoDetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureVideoDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
