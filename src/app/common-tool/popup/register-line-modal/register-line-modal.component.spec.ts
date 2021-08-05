import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLineModalComponent } from './register-line-modal.component';

describe('RegisterLineModalComponent', () => {
  let component: RegisterLineModalComponent;
  let fixture: ComponentFixture<RegisterLineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLineModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
