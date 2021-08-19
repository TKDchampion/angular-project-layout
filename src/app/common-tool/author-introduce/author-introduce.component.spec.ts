import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorIntroduceComponent } from './author-introduce.component';

describe('AuthorIntroduceComponent', () => {
  let component: AuthorIntroduceComponent;
  let fixture: ComponentFixture<AuthorIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorIntroduceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
