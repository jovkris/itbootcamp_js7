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
        // danasnji datum
        let cur_dat = new Date();
        let cur_day = cur_dat.getDate();
        let cur_mon = cur_dat.getMonth()+1;
        let cur_yea = cur_dat.getFullYear();
        // vreme poruke iz baze
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        let date_and_time = ``;

        if (cur_day == day && cur_mon == month && cur_yea == year) {
            // dodavanje nule ispred jednocifrenih vrednosti
            hours = String(hours).padStart(2, "0");
            minutes = String(minutes).padStart(2, "0");
            date_and_time = `${hours}:${minutes}`;
        }
        else{
            day = String(day).padStart(2,"0");
            month = String(month).padStart(2, "0");
            hours = String(hours).padStart(2, "0");
            minutes = String(minutes).padStart(2, "0");
            date_and_time = `${day}.${month}.${year} - ${hours}:${minutes}`;
        }
        return date_and_time; 
    }

    // template za poruku
    templateLi(data){
        let id = data.id;
        data = data.data();
        let li = document.createElement(`li`);
        li.innerHTML = `<span id="usernameSPN">${data.username} :</span> <span id="msgSPN">${data.message}</span> <span id="dateSPN">${this.formatDate(data)}</span><img src="../img/trash.png">`;
        li.setAttribute(`id`, `${id}`);

        console.log(data.username);
        this.container.appendChild(li);
        if(data.username == localStorage.username){
            li.classList.toggle(`me`);   
        }
        else{
            li.classList.toggle(`them`);
        }
        
    }

    clear(){
        this.container.innerHTML = ``;
    }
}

export { ChatUI };