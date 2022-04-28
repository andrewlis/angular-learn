import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public image: string;
  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
