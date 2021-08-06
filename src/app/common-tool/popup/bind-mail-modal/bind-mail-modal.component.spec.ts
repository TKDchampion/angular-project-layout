import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindMailModalComponent } from './bind-mail-modal.component';

describe('BindMailModalComponent', () => {
  let component: BindMailModalComponent;
  let fixture: ComponentFixture<BindMailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindMailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindMailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
