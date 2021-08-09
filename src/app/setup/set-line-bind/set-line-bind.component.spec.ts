import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLineBindComponent } from './set-line-bind.component';

describe('SetLineBindComponent', () => {
  let component: SetLineBindComponent;
  let fixture: ComponentFixture<SetLineBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetLineBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLineBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
