import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWrapperComponent } from './box-wrapper.component';

describe('ChangeDetectionComponent', () => {
  let component: BoxWrapperComponent;
  let fixture: ComponentFixture<BoxWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxWrapperComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
