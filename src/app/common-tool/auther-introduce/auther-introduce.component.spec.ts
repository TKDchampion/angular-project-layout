import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherIntroduceComponent } from './auther-introduce.component';

describe('AutherIntroduceComponent', () => {
  let component: AutherIntroduceComponent;
  let fixture: ComponentFixture<AutherIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutherIntroduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutherIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
