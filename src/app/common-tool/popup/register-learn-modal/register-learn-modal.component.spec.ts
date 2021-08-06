import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLearnModalComponent } from './register-learn-modal.component';

describe('RegisterLearnModalComponent', () => {
  let component: RegisterLearnModalComponent;
  let fixture: ComponentFixture<RegisterLearnModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLearnModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLearnModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
