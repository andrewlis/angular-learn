import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { StoreShakerComponent } from "./store-shaker/store-shaker.component";
import { WebsocketShakerComponent } from "./websocket-shaker/websocket-shaker.component";
import { CardWrapperComponent } from "./card-wrapper/card-wrapper.component";
import { AuthorizedWrapperComponent } from "./authorized-wrapper/authorized-wrapper.component";

const routes: Routes = [
  {
    path: '',
    component: AuthorizedWrapperComponent,
    children: [
      {
        path: 'main',
        component: WelcomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'change-detection',
        loadChildren: () => import('./change-detection/change-detection.module').then(m => m.ChangeDetectionModule),
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
        path: 'cards',
        component: CardWrapperComponent
      },
      {
        path: '**',
        component: WelcomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule {
}
