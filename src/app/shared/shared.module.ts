import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EventsService } from './services/event/events.service';
import { ModelModule } from '../model/model.module';
import { SocketService } from './services/socket/socket.service';
import { GlobalDataService } from './services/app/global-data.service';

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
    SocketService
  ]
})
export class SharedModule { }
