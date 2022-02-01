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
        // za domaci PROVERA KORISNICKOG IMENA
        /*
        Dužina korisničkog imena je između 2 i 10 karaktera
        Korisničko ime ne sme biti sastavljeno samo od praznina ili tabova
        Ukoliko je korisničko ime nevalidno, prikazati alert sa odgovarajućom porukom
        */
        this._username = u;
    }

    get room(){
        return this._room;
    }

    get username(){
        return this._username;
    }

    // dodavanje nove poruke!!

    async addChat(msg){
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