import * as socket from 'socket.io-client';
import { ChannelNames } from './channel.names';
import { SocketData } from '../socket-data.model';


export class ChannelBase {

  private _channelName: ChannelNames;
  private _channel: any;

  constructor(channelName: ChannelNames, ) {
    this._channelName = channelName;
  }
  
  public openChannel(socketDataProvider: () => SocketData) {
    let socketData = socketDataProvider();
    let channelUrl = `${socketData.url}/${this._channelName}?token=${socketData.token}`;
    let channel = socket(channelUrl);
    channel.on('connect', () => {
      console.log(`Socket channel [${this._channelName}] connected.`);
    });
    channel.on('error', (error) => {
      console.log(`Socket channel [${this._channelName}] error:`, error);
    });
    this._channel = channel;
  }

  public addListener<TEvent>(eventName: string, listener: (ev: TEvent) => void) {
    if (eventName && listener) {
      this._channel.on(eventName, listener);
    }
  }

  public removeListener<TEvent>(eventName: string, listener: (ev: TEvent) => void) {
    if (eventName && listener) {
      this._channel.off(eventName, listener);
    }
  }

}