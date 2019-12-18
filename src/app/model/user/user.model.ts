import { UserMessage } from './user-message.model';

export class User {
  selected: boolean;
  message: string;

  constructor(
    public name: string = null,
    public messages: UserMessage[] = null
  ) {
  }
}