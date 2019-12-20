import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatDashboardComponent } from './components/chat-dashboard/chat-dashboard.component';


@NgModule({
  declarations: [ChatDashboardComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
