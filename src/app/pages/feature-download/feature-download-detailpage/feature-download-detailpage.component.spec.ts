import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDownloadDetailpageComponent } from './feature-download-detailpage.component';

describe('FeatureDownloadDetailpageComponent', () => {
  let component: FeatureDownloadDetailpageComponent;
  let fixture: ComponentFixture<FeatureDownloadDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDownloadDetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDownloadDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
