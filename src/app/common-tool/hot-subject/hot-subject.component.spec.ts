import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSubjectComponent } from './hot-subject.component';

describe('HotSubjectComponent', () => {
  let component: HotSubjectComponent;
  let fixture: ComponentFixture<HotSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
