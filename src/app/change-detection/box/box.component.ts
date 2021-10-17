import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent implements OnInit, AfterViewInit {

  @Input() public x!: number;
  @Input() public y!: number;
  @Input() public num!: number;
  @Input() public selected!: boolean;

  @ViewChild('div')
  set div(value: ElementRef) {
    if(value) {
      value.nativeElement['BoxComponent']= this;
    }
  }
  color!: string;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.color = `rgba(${this.getRandomValue()},${this.getRandomValue()},${this.getRandomValue()}, 0.5)`
  }

  ngAfterViewInit() {
    this.cdr.detach();  
  }

  getRandomValue() {
    return Math.floor((Math.random() * 255) + 1)
  }

  update() {
    this.cdr.detectChanges();
  }
}
