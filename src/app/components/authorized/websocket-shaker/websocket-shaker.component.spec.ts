import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketShakerComponent } from './websocket-shaker.component';

describe('WebsocketShakerComponent', () => {
  let component: WebsocketShakerComponent;
  let fixture: ComponentFixture<WebsocketShakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsocketShakerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketShakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
