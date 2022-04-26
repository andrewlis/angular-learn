import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreShakerComponent } from "./components/store-shaker/store-shaker.component";
import { WebsocketShakerComponent } from "./components/websocket-shaker/websocket-shaker.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'change-detection',
    loadChildren: () => import('./components/change-detection/change-detection.module').then(m => m.ChangeDetectionModule),
  },
  {
    path: 'state-shaker',
    component: StoreShakerComponent
  },
  {
    path: 'websocket-shaker',
    component: WebsocketShakerComponent
  },
  {
    path: '**',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
