import { RouterModule, Routes } from "@angular/router";
import { BoxWrapperComponent } from "./box-wrapper/box-wrapper.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: BoxWrapperComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionRoutingModule {
}