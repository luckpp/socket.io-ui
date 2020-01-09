import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessengerRoutingModule } from './messenger-routing.module';
import { MessengerDashboardComponent } from './components/messenger-dashboard/messenger-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ModelModule } from '../model/model.module';
import { MessengerConnectionGuard } from './guards/messenger-connection.guard';
import { UserListComponent } from './components/user-list/user-list.component';
import { MessageAreaComponent } from './components/message-area/message-area.component';


@NgModule({
  declarations: [MessengerDashboardComponent, UserListComponent, MessageAreaComponent],
  imports: [
    CommonModule,
    MessengerRoutingModule,
    FormsModule,
    SharedModule,
    ModelModule
  ],
  providers: [
    MessengerConnectionGuard
  ]
})
export class MessengerModule { }
