import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsItemComponent } from './subjects-item.component';

describe('SubjectsItemComponent', () => {
  let component: SubjectsItemComponent;
  let fixture: ComponentFixture<SubjectsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
