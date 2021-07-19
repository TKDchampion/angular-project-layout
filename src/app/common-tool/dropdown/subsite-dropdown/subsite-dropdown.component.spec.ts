import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsiteDropdownComponent } from './subsite-dropdown.component';

describe('SubsiteDropdownComponent', () => {
  let component: SubsiteDropdownComponent;
  let fixture: ComponentFixture<SubsiteDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsiteDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsiteDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
