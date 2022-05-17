import { Component, OnInit } from '@angular/core';
import { ICard } from "./interfaces/card.interface";
import { CardService } from '../../../services/card/card.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  public cards$: Observable<ICard[]>;

  constructor(private service: CardService) {}

  ngOnInit(): void {
    this.cards$ = this.service.getAll().pipe(
      catchError(err => {
        return [];
      })
    )
  }
}
