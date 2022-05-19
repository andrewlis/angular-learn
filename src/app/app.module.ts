import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from "@ngxs/store";
import { WorldsState } from "./states/worlds/worlds.state";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SocketIoModule } from "ngx-socket-io";
import { WEBSOCKET_CONFIG } from "./services/websockets/constants/websocket.config.const";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/unauthorized/login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthState } from './states/auth/auth.state';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ErrorHandlerComponent } from './components/shared/error-handler/error-handler.component';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsStoragePluginModule.forRoot(),
    NgxsModule
      .forRoot(
        [
          AuthState,
          WorldsState,
        ]
      ),
    NgxsRouterPluginModule.forRoot(),
    SocketIoModule.forRoot(WEBSOCKET_CONFIG),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
