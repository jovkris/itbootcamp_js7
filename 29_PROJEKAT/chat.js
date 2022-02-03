class Chatroom{
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection(`chats`);
    }

    set room(r){
        this._room = r;
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

    // nesto da probam

    // check_msg(msg){
    //    let msg1 = msg.trim();
    //     let message = ``;
    //     if (msg1.length > 0) {
    //         message = msg;
    //     }
    //     return message;
    // }





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
        this.chats
        .where(`room`, `==`, this.room)
        .orderBy(`created_at`, `asc`)
        .onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change => {

                // Ispisati dokumente koji su dodati u nasu bazu
                if (change.type == `added`) {
                    callback(change.doc.data()); // prosledjivanje dokumenta
                }
            });
        });
    }
}


export {Chatroom};