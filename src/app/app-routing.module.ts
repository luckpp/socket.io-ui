import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './main';


const routes: Routes = [
  {
    path: 'messenger',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./messenger/messenger.module').then(m => m.MessengerModule)
  },
  {
    path: 'chat',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
