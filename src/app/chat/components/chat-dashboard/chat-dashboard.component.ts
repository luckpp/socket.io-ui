import { Component, OnInit } from '@angular/core';
import { ChatRoom } from '../../model/chat-room.model';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.component.html',
  styleUrls: ['./chat-dashboard.component.scss']
})
export class ChatDashboardComponent implements OnInit {

  chatRooms: ChatRoom[];

  constructor() { 
    this.chatRooms = [
      new ChatRoom('Red'),
      new ChatRoom('Green'),
      new ChatRoom('Blue')
    ]
  }

  ngOnInit() {
  }

}
