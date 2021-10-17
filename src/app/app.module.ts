import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './change-detection/box/box.component';
import { HeaderComponent } from './header/header.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { CvaComponent } from './cva/cva.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    HeaderComponent,
    ChangeDetectionComponent,
    CvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
