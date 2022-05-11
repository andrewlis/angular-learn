import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreShakerComponent } from './store-shaker.component';

describe('StoreShakerComponent', () => {
  let component: StoreShakerComponent;
  let fixture: ComponentFixture<StoreShakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreShakerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreShakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
