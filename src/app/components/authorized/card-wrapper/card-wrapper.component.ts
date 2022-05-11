import { Component } from '@angular/core';
import { ICard } from "./interfaces/card.interface";

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent {
  //todo replace crud of cards in database
  cards: ICard[] = [
    {
      image: './assets/pug.jpg',
      title: 'lorem',
      subtitle: 'string ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A harum iste mollitia neque rerum?',
    },
    {
      image: './assets/pug.jpg',
      title: 'string2',
      subtitle: 'string2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A harum iste mollitia neque rerum?',
    },   {
      image: './assets/pug.jpg',
      title: 'string3',
      subtitle: 'string3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A harum iste mollitia neque rerum?',
    },
    {
      image: './assets/pug.jpg',
      title: 'string4',
      subtitle: 'string4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A harum iste mollitia neque rerum?',
    }
  ];
}
