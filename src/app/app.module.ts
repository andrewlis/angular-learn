import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxsModule } from "@ngxs/store";
import { StoreShakerComponent } from './components/store-shaker/store-shaker.component';
import { WorldsState } from "./states/worlds/worlds.state";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { WebsocketShakerComponent } from './components/websocket-shaker/websocket-shaker.component';
import { SocketIoModule } from "ngx-socket-io";
import { WEBSOCKET_CONFIG } from "./services/websockets/constants/websocket.config.const";
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreShakerComponent,
    WebsocketShakerComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule
      .forRoot(
        [WorldsState]
      ),
    SocketIoModule.forRoot(WEBSOCKET_CONFIG),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
