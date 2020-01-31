export class Message {
    public id: string;
    public subject: string;
    public messageText: string;
    public sender: string;

    constructor(id: string, subject: string, messageText: string, sender: string) {
        this.id = id;
        this.subject = subject;
        this.messageText = messageText;
        this.sender = sender;
    }
}
