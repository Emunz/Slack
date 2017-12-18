export class Chat {
    constructor(
        public id: number = null,
        public chatType: string = "",
        public chatName: string = "",
        public  _users = [],
        public _messages = [],

      ){}
}