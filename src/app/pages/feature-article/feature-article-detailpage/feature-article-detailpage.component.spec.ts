import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureArticleDetailpageComponent } from './feature-article-detailpage.component';

describe('FeatureArticleDetailpageComponent', () => {
  let component: FeatureArticleDetailpageComponent;
  let fixture: ComponentFixture<FeatureArticleDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureArticleDetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureArticleDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
