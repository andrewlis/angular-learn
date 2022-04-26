import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxWrapperComponent } from "./box-wrapper/box-wrapper.component";
import { BoxComponent } from "./box-wrapper/box/box.component";
import { ChangeDetectionRoutingModule } from "./change-detection-routing.module";

@NgModule({
  declarations: [
    BoxWrapperComponent,
    BoxComponent,
  ],
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule
  ]
})
export class ChangeDetectionModule {
}
