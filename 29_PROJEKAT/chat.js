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
}

// SVE RADI KAKO TREBA

// let proba = new Chatroom(`js`, `proba_username`);
// let proba1 = new Chatroom(`tests`, `jos jedna proba`);
// let proba3 = new Chatroom(`general`, `teksto probe`);

// proba.username = `hm ne znam`;
// console.log(proba);