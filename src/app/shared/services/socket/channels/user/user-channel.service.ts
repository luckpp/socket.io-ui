import { Injectable } from '@angular/core';
import { ChannelBase } from '../channel.base';
import { ChannelNames } from '../channel.names';

@Injectable()
export class UserChannelService extends ChannelBase {

  constructor(
  ) { 
    super(ChannelNames.user);
  }
}
