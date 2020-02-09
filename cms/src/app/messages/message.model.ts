import { Injectable } from '@angular/core';

@Injectable()

export class Message {
  constructor(
    public id: string,
    public subject: string,
    public messageText: string,
    public sender: string
  ) {}
}
