import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IWorld } from "./interfaces/world.interface";

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  constructor(private http: HttpClient) {
  }

  public getNames(): Observable<IWorld[]> {
    return this.http.get<IWorld[]>('world')
  }

  public addNew(data: IWorld): any {
    return this.http.post('world', data)
  }

  public delete(id: number): any {
    return this.http.delete('world/' + id)
  }
}
