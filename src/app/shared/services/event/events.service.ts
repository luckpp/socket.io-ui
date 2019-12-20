import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserMessage } from 'src/app/model/user/user-message.model';
import * as uuid from 'uuid/v1';
import { MessageChannelEvents } from 'src/app/model';
import { GlobalDataService } from '../app/global-data.service';

@Injectable()
export class EventsService {

  constructor(
    private _http: HttpClient,
    private _globalDataService: GlobalDataService
  ) { }

  sendMessage(userMessage: UserMessage): Promise<any> {

    let eventWrapper = {
      channelName: 'message',
      event: {
        uuid: uuid(),
        name: MessageChannelEvents.newMessage,
        payload: userMessage
      }
    }

    let eventsUrl = this._globalDataService.eventsUrl;
    
    return this._http.post(eventsUrl, eventWrapper).toPromise();
  }
}
