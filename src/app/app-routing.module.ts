import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './main';


const routes: Routes = [
  {
    path: 'messenger',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./messenger/messenger.module').then(m => m.MessengerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
