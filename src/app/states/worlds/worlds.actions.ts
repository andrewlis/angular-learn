import { WorldActions } from "./worlds-actions.const";
import { IWorld } from "../../services/world/interfaces/world.interface";

export namespace Worlds {
  export class AddWorld {
    static readonly type = WorldActions.ADD_WORLD;

    constructor(public world: IWorld) {
    }
  }

  export class DeleteWorld {
    static readonly type = WorldActions.DELETE_WORLD;

    constructor(public id: number) {
    }
  }

  export class GetWorlds {
    static readonly type = WorldActions.GET_WORLDS;
  }
}