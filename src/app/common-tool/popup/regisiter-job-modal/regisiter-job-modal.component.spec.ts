import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisiterJobModalComponent } from './regisiter-job-modal.component';

describe('RegisiterJobModalComponent', () => {
  let component: RegisiterJobModalComponent;
  let fixture: ComponentFixture<RegisiterJobModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisiterJobModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisiterJobModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
