import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedWrapperComponent } from './authorized-wrapper.component';

describe('AuthorizedWrapperComponent', () => {
  let component: AuthorizedWrapperComponent;
  let fixture: ComponentFixture<AuthorizedWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
