import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { EventsService, SocketService, MessageChannelService, UsersService, UserChannelService } from 'src/app/shared';
import { Message, User, MessageChannelEvents, UserChannelEvents } from 'src/app/model';
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
    public _userChannelService: UserChannelService,
    public _messageChannelService: MessageChannelService,
    private _usersService: UsersService
  ) {
  }

  async ngOnInit() {
    this._messageChannelService.addListener(MessageChannelEvents.newMessage, (ev) => {
      console.log(MessageChannelEvents.newMessage, ev);
    });
    this._userChannelService.addListener<UsersChangedEvent>(UserChannelEvents.usersChanged, (ev) => {
      console.log(UserChannelEvents.usersChanged, ev);
      this.users =  ev.users;
    });
    this.users = await this._usersService.getUsers();
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

export class UsersChangedEvent {
  users: User[]
}
