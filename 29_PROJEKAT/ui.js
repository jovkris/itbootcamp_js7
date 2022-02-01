class ChatUI{
    constructor(message_creator){
        this.creator = message_creator;
    }

    set creator(message_creator){
        this._creator =  message_creator;
    }

    get creator(){
        return this._creator;
    }   
}

export {ChatUI};