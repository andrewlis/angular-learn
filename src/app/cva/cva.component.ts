import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-cva',
  templateUrl: './cva.component.html',
  styleUrls: ['./cva.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CvaComponent),
    multi: true
  }]
  
})
export class CvaComponent implements ControlValueAccessor {

  private selected: boolean = false;

  constructor() { }
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  click() {
    this.selected = !this.selected;
  }

}
