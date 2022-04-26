import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { Worlds } from "../../states/worlds/worlds.actions";
import { WorldsState } from "../../states/worlds/worlds.state";
import { Observable } from "rxjs";
import { FormBuilder, FormControl } from "@angular/forms";
import { IWorld } from "../../services/world/interfaces/world.interface";

@Component({
  selector: 'app-store-shaker',
  templateUrl: './store-shaker.component.html',
  styleUrls: ['./store-shaker.component.scss']
})
export class StoreShakerComponent implements OnInit {

  @Select(WorldsState.worlds)
  public worlds$: Observable<IWorld[]>;

  public nameControl: FormControl;

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {

  }

  public addName(): void {
    this.store.dispatch(new Worlds.AddWorld(this.nameControl?.value));
    this.nameControl.setValue('')
  }

  ngOnInit(): void {
    this.nameControl = this.fb.control('');
    this.store.dispatch(new Worlds.GetWorlds());
  }

  public refresh(): void {
    this.store.dispatch(new Worlds.GetWorlds())
  }

  public delete(id: number) {
    this.store.dispatch(new Worlds.DeleteWorld(id));
  }
}
