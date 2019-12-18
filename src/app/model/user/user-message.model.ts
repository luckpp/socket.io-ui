export class UserMessage {
  fromUserName: string;
  toUserName: string;

  constructor(
    public content: string = null
  ) {
  }
}