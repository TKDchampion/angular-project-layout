import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarIcononlyComponent } from './nav-bar-icononly.component';

describe('NavBarIcononlyComponent', () => {
  let component: NavBarIcononlyComponent;
  let fixture: ComponentFixture<NavBarIcononlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarIcononlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarIcononlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
