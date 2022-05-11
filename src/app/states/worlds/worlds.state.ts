import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Worlds } from "./worlds.actions";
import { WorldService } from "../../services/world/world.service";
import { catchError, tap } from "rxjs/operators";
import { IWorld } from "../../services/world/interfaces/world.interface";
import { throwError } from "rxjs";
import { IWorldsModel } from "./worlds-model.interface";
import { WORLDS_DEFAULTS } from "./worlds-defaults.const";

@State<IWorldsModel>({
  name: 'worlds',
  defaults: WORLDS_DEFAULTS
})
@Injectable()
export class WorldsState {

  constructor(private service: WorldService) {
  }

  @Selector()
  static worlds(state: IWorldsModel) {
    return state.worlds;
  }

  @Action(Worlds.AddWorld)
  addName(ctx: StateContext<IWorldsModel>, action: Worlds.AddWorld) {
    const state = ctx.getState();
    let id = Math.floor(Math.random() * 1000);
    const body: IWorld = {
      ...action.world,
      id
    }
    return this.service.addNew(body).pipe(
      tap(() => {
        ctx.setState({
          worlds: [
            ...state.worlds,
            body,
          ]
        })
      }),
      catchError(err => {
        return throwError(err);
      })
    )

  };

  @Action(Worlds.GetWorlds)
  getWorlds(ctx: StateContext<IWorldsModel>, action: Worlds.GetWorlds) {
    const state = ctx.getState();
    return this.service.getNames().pipe(
      tap((world) => {
        ctx.setState({
          worlds: world
        })
      })
    )
  };

  @Action(Worlds.DeleteWorld)
  deleteWorld(ctx: StateContext<IWorldsModel>, action: Worlds.DeleteWorld) {
    return this.service.delete(action.id).pipe(
      tap(console.warn)
    )
  }
}