import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyKanbanComponent } from './verify-kanban.component';

describe('VerifyKanbanComponent', () => {
  let component: VerifyKanbanComponent;
  let fixture: ComponentFixture<VerifyKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyKanbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
