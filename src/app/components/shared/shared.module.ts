import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ErrorHandlerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ErrorHandlerComponent
  ]
})
export class SharedModule { }
