import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewActiveComponent } from './new-active.component';

describe('NewActiveComponent', () => {
  let component: NewActiveComponent;
  let fixture: ComponentFixture<NewActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
