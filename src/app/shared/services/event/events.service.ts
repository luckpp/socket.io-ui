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
    console.log('EventsService.sendMessage()', userMessage);
    return this._http.post('http://localhost:3123/events', userMessage).toPromise();
  }
}
