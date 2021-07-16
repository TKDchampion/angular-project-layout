import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeTitleComponent } from './scope-title.component';

describe('ScopeTitleComponent', () => {
  let component: ScopeTitleComponent;
  let fixture: ComponentFixture<ScopeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopeTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
