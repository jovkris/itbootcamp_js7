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

    formatDate(data){
        let date = data.created_at.toDate();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        // dodavanje nule ispred jednocifrenih vrednosti
        day = String(day).padStart(2,"0");
        month = String(month).padStart(2, "0");
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        
        let date_and_time = `${day}.${month}.${year} - ${hours}:${minutes}`;
        return date_and_time; 
    }

    // metod koji sluzi kao template za poruku
    templateLi(data){
        let li = `<li>${data.username} : ${data.message} <br> ${this.formatDate(data)}</li>`;
        this.container.innerHTML += li;
    }
}

export { ChatUI };