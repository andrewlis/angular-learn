import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { CvaComponent } from './cva/cva.component';

const routes: Routes = [
  { path: '', component: ChangeDetectionComponent, pathMatch: 'full' },
  { path: 'control-value-accessor', component: CvaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
