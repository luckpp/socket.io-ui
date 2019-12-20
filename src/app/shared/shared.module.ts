import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EventsService } from './services/event/events.service';
import { ModelModule } from '../model/model.module';
import { SocketService } from './services/socket/socket.service';
import { GlobalDataService } from './services/app/global-data.service';
import { ApplicationChannelService } from './services/socket/channels/application/application-channel.service';
import { MessageChannelService } from './services/socket/channels/message/message-channel.service';
import { UserChannelService } from './services/socket/channels/user/user-channel.service';
import { UsersService } from './services/api/users.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ModelModule
  ],
  providers: [
    EventsService,
    GlobalDataService,
    SocketService,
    ApplicationChannelService,
    MessageChannelService,
    UserChannelService,
    UsersService
  ]
})
export class SharedModule { }
