import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizedRoutingModule } from "./authorized-routing.module";
import { AppComponent } from "../../app.component";
import { HeaderComponent } from "./header/header.component";
import { StoreShakerComponent } from "./store-shaker/store-shaker.component";
import { WebsocketShakerComponent } from "./websocket-shaker/websocket-shaker.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { CardWrapperComponent } from "./card-wrapper/card-wrapper.component";
import { CardComponent } from "./card-wrapper/card/card.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthorizedWrapperComponent } from './authorized-wrapper/authorized-wrapper.component';
import { MyLibModule } from 'my-lib';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreShakerComponent,
    WebsocketShakerComponent,
    WelcomeComponent,
    CardWrapperComponent,
    CardComponent,
    AuthorizedWrapperComponent
  ],
  imports: [
    CommonModule,
    MyLibModule,
    AuthorizedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthorizedModule {
}
