import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";
// SVE RADI KAKO TREBA

let proba = new Chatroom(`js`, `proba_username`);
let proba1 = new Chatroom(`tests`, `jos jedna proba`);
let proba3 = new Chatroom(`general`, `teksto probe`);

proba.username = `hm ne znam`;
console.log(proba);

proba.addChat(`blip blap blup`) // then i catch cemo tek ovde pisati...
.then(() =>{
    console.log(`uspesno dodat chat`);
})
.catch(err =>{
    console.log(`neuspesno: ${err}`);
})

proba.getChats((par)=>{ // ocekivanje parametra jer callback
    console.log(par); // realizacija callback-a
});

console.log(proba1.room);

// dom za ul gde ce se prikazivati poruke

let message_container = document.querySelector(`ul`);

let c = new ChatUI(message_container);
console.log(c.creator);