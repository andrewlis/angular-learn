import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websockets/websocket.service'
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-websocket-shaker',
  templateUrl: './websocket-shaker.component.html',
  styleUrls: ['./websocket-shaker.component.scss']
})
export class WebsocketShakerComponent implements OnInit {
  events: string[] = []

  constructor(public ws: WebsocketService) {
  }

  ngOnInit() {
    this.ws.getEvent().pipe(
      tap(event => this.events.push(event))
    ).subscribe()
  }

  sendEvent() {
    this.ws.emit('HERE I AM!!!!');
  }
}
