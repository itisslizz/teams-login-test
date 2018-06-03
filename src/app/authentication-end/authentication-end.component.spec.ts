import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationEndComponent } from './authentication-end.component';

describe('AuthenticationEndComponent', () => {
  let component: AuthenticationEndComponent;
  let fixture: ComponentFixture<AuthenticationEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
