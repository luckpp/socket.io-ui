import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { EventsService, SocketService, MessageChannelService } from 'src/app/shared';
import { Message, User } from 'src/app/model';
import { UserMessage } from 'src/app/model/user/user-message.model';

@Component({
  selector: 'app-messenger-dashboard',
  templateUrl: './messenger-dashboard.component.html',
  styleUrls: ['./messenger-dashboard.component.scss']
})
export class MessengerDashboardComponent implements OnInit  {
  
  users: User[];
  selectedUser: User;

  constructor(
    public _eventsService: EventsService,
    public _socketService: SocketService,
    public _messageChannelService: MessageChannelService
  ) {
    this.users = [
      new User('Johnny', [new UserMessage('Hello'), new UserMessage('ma man!')]),
      new User('Bravo'),
      new User('Marlon'),
      new User('Brando')
    ];
    this.users[0].selected = true;
    this.selectedUser = this.users[0];
  }

  ngOnInit() {
    // this._socketService.on('messenger-default-event', (data) => {
    //   console.log(data);
    // });
    this._messageChannelService.addListener('messenger-default-event', (ev) => {
      console.log('Yah baby', ev);
    })
  }

  userClick(clickedUser: User) {
    for (let user of this.users) {
      if (user === clickedUser) {
        user.selected = !user.selected;
      } else if (user.selected) {
        user.selected = false;
      }
    }
    if (clickedUser.selected) {
      this.selectedUser = clickedUser;
    } else {
      this.selectedUser = null;
    }
  }

  textKeypress(ev: KeyboardEvent): boolean {
    if (ev.code == 'Enter' || ev.code == 'NumpadEnter') {
      if (this.isMessageValid()) {
        this.sendMessage();
      }
      return false;
    }
    return true;
  }

  isMessageValid() {
    return this.selectedUser 
      && this.selectedUser.message
      && this.selectedUser.message.trim().length > 0;
  }

  async sendMessage() {
    let message = this.selectedUser.message;
    let toUserName = this.selectedUser.name;
    let userMessage = new UserMessage(message);
    userMessage.toUserName = toUserName;
    await this._eventsService.sendMessage(userMessage);
    this.selectedUser.message = null;
    if (!this.selectedUser.messages) {
      this.selectedUser.messages = [];
    }
    this.selectedUser.messages.push(userMessage);
  }
}

