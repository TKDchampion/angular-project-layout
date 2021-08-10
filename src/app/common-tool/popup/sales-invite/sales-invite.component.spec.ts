import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInviteComponent } from './sales-invite.component';

describe('SalesInviteComponent', () => {
  let component: SalesInviteComponent;
  let fixture: ComponentFixture<SalesInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
