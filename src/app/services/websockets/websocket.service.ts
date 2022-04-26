import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) {
  }

  getEvent() {
    return this.socket.fromEvent<string>('newEvent')
  }

  emit(data: any) {
    this.socket.emit('event', data);
  }
}