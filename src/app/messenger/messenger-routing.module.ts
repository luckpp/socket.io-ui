import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessengerDashboardComponent } from './components/messenger-dashboard/messenger-dashboard.component';
import { MessengerConnectionGuard } from './guards/messenger-connection.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ MessengerConnectionGuard ],
    children: [
      {
        path: 'dashboard',
        component: MessengerDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessengerRoutingModule { }
