import { ChangeDetectorRef } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BoxComponent } from './box/box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  public currentBox!: BoxComponent | null;
  public offsetY!: number;
  public offsetX!: number;
  public boxes: Array<any> = [];
  public size: number = 10000;

  constructor(private cdr: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }

  ngOnInit():void {
    for (let i = 0; i < this.size; i++) {
      let randX =  Math.floor((Math.random() * 1000) + 1);
      let randY =  Math.floor((Math.random() * 1000) + 1);
      this.boxes[i] = { x: randX, y: randY, num: i };
    }    
  }

  onMouseMove(event:any) {
    event.preventDefault();
    if(this.currentBox) {
      this.updateBox(this.currentBox, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  onMouseUp(event: MouseEvent) {
    if(this.currentBox) {
      this.currentBox.selected = false;
      this.currentBox.update();
    }
    this.currentBox = null;
  }

  onMouseDown(event: any) {
    const box = <BoxComponent>event.target["BoxComponent"];
    
    this.offsetX = box.x - event.clientX;
    this.offsetY = box.y - event.clientY;
    
    this.currentBox = box;

    box.selected = true;
    box.update();
  }
 
  updateBox(box: BoxComponent, x: number, y: number) {
    box.x = x;
    box.y = y;
    box.update();
  }
}
