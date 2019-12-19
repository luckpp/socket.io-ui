import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserMessage } from 'src/app/model/user/user-message.model';
import * as uuid from 'uuid/v1';
import { MessageChannelEvents } from 'src/app/model';

@Injectable()
export class EventsService {

  constructor(
    private _http: HttpClient
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

    console.log('EventsService.sendMessage(): ', eventWrapper);
    return this._http.post('http://localhost:3123/events', eventWrapper).toPromise();
  }
}
