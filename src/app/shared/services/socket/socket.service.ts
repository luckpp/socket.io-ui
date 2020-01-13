import { Injectable } from '@angular/core';
import { GlobalDataService } from '../app/global-data.service';
import { ApplicationChannelService } from './channels/application/application-channel.service';
import { MessageChannelService } from './channels/message/message-channel.service';
import { UserChannelService } from './channels/user/user-channel.service';
import { SocketData } from './socket-data.model';

@Injectable()
export class SocketService {

  private _io: any;

  constructor(
    private _globalDataService: GlobalDataService,
    private _applicationChannelService: ApplicationChannelService,
    private _messageChannelService: MessageChannelService,
    private _userChannelService: UserChannelService
  ) {
  }

  public async connect(): Promise<boolean> {
    let callback = () => this.socketDataProvider();
    this._applicationChannelService.openChannel(callback);
    this._messageChannelService.openChannel(callback);
    this._userChannelService.openChannel(callback);
    return Promise.resolve(true);
  }

  private socketDataProvider(): SocketData {
    let url = this._globalDataService.url;
    let token = this._globalDataService.token;
    let userName = this._globalDataService.userName;

    let query = `token=${token}&userName=${userName}`;

    let result = new SocketData(url, query);
    return result;
  }
}
