import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICard } from '../../components/authorized/card-wrapper/interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) {}

  public getAll(): Observable<ICard[]> {
    return this.http.get<ICard[]>('api/cards');
  }
}
