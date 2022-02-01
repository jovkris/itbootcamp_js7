class ChatUI{
    constructor(message_container){
        this.container = message_container;
    }

    set container(message_container){
        this._container =  message_container;
    }

    get container(){
        return this._container;
    }   

    // metod koji sluzi kao template za poruku
    templateLi(data){
        let li = `<li>${data.username} : ${data.message} <br> ${data.created_at.toDate()}</li>`;
        this.container.innerHTML += li;
    }
}

export { ChatUI };