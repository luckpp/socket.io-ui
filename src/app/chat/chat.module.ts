import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatDashboardComponent } from './components/chat-dashboard/chat-dashboard.component';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [ChatDashboardComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    TabsModule
  ]
})
export class ChatModule { }
