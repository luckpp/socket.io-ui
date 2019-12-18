import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserMessage } from 'src/app/model/user/user-message.model';

@Injectable()
export class EventsService {

  constructor(
    private _http: HttpClient
  ) { }

  sendMessage(userMessage: UserMessage): Promise<any> {

    let eventWrapper = {
      channelName: 'message',
      event: {
        name: 'messenger-default-event',
        payload: userMessage
      }
    }

    console.log('EventsService.sendMessage(): ', eventWrapper);
    return this._http.post('http://localhost:3123/events', eventWrapper).toPromise();
  }
}
