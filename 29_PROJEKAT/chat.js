class Chatroom{
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection(`chats`);
        this.unsub = false; // odredili smo da false bude kao signal da je stranica prvi put ucitana
    }

    set room(r){
        this._room = r;
        localStorage.setItem("room", r);
    }

    set username(u){
        let u1 = u.trim();
        if (u1.length > 1 && u1.length < 11) {
            this._username = u1;
            localStorage.setItem("username", u1);
        }
        else{
            window.alert("Invalid username! Try again")
        }
    }

    get room(){
        return this._room;
    }

    get username(){
        return this._username;
    }

    // delete chat

    deleteChat(id){
        this.chats
        .doc(id)
        .delete()
        .then(()=>{
            console.log(`Uspesno izbrisan chat`);
        })
        .catch(err =>{
            console.log(`greska pri brisanju chat-a ${err}`);
        })
    }

    // update room-a

    updateRoom(ur) { // update room kao parametar
        this.room = ur;
        if(this.unsub){ // ako unsub vise nije false nego je u getChats postalo funkcija
            this.unsub(); // unsub je sada funkcija i pozivam je sa zagradama
        }
    }

    // dodavanje nove poruke!!

    async addChat(msg){
        let msg1 = msg.trim();
        if (msg1.length==0) {
            return;
        }
        let date = new Date();
        let new_msg = {
            message: msg,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        }

        // da sacuvam dokument u db
        let response = await this.chats.add(new_msg);
        return response; // vracam promise i mogu za njega da kazem .then() i .catch()

    }

    // callback metod get chats prati promene i vraca poruke
    getChats(callback){
        let possible_rooms = document.querySelectorAll(`button`);
        possible_rooms.forEach(el =>{
            console.log(el.id);
            console.log(el);
            if(el.id == this.room){
                el.classList.toggle(`selected`);
            }
            else if(el.id !== this.room && el.classList.contains(`selected`)){
                el.classList.toggle(`selected`);
            }
        })
        this.unsub = this.chats // sve smestamo u unsub i kasnije pozivamo kao funkciju
        .where(`room`, `==`, this.room)
        .orderBy(`created_at`, `asc`)
        .onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change => {

                // Ispisati dokumente koji su dodati u nasu bazu
                if (change.type == `added`) {
                    callback(change.doc); // ceo dokument mozemo da gledamo i njegov id
                }
            });
        });
    }
}


export {Chatroom};