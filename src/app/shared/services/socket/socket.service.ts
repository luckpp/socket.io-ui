import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { GlobalDataService } from '../app/global-data.service';

@Injectable()
export class SocketService {

  private _socket;

  constructor(
    private _globalDataService: GlobalDataService
  ) {
  }

  public connect(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.disconnect();
      this._socket = io(this.connectionString);
      this._socket.on('connect', () => {
        resolve(true);
      });
      
    });
  }

  public disconnect() {
    if (this._socket) {
      this._socket.close();
      this._socket.removeAllListeners();
    }
  }

  public emit(event, payload) {
    this._socket.emit(event, payload);
  }

  public on(event, callback) {
    this._socket.on(event, callback);
  }

  public off(event, callback) {
    this._socket.off(event, callback);
  }

  private get connectionString(): string {
    return `${this._globalDataService.url}?uuid=${this._globalDataService.uuid}`;
  }
}
