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
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { CardComponent } from './components/card-wrapper/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreShakerComponent,
    WebsocketShakerComponent,
    WelcomeComponent,
    CardWrapperComponent,
    CardComponent
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
    FormsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
