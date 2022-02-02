import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";
// SVE RADI KAKO TREBA

let proba = new Chatroom(`js`, `Kristina`);
let proba1 = new Chatroom(`tests`, `Nemanja`);
let proba3 = new Chatroom(`general`, `Vlajko`);


console.log(proba.username);
console.log(proba);

// proba.addChat(`blip blap blup`) // then i catch cemo tek ovde pisati...
// .then(() =>{
//     console.log(`uspesno dodat chat`);
// })
// .catch(err =>{
//     console.log(`neuspesno: ${err}`);
// })

// proba.getChats((par)=>{ // ocekivanje parametra jer callback
//     console.log(par); // realizacija callback-a
// });

console.log(proba1.room);

// dom za ul gde ce se prikazivati poruke

let message_container = document.querySelector(`ul`);

let c = new ChatUI(message_container);
console.log(c.container);


///////////////////////////////////////////

proba.getChats((par)=>{ // ocekivanje parametra jer callback
    c.templateLi(par); // realizacija callback-a
});

let send = document.querySelector(`#send`);
let form_send = document.querySelector(`#form_send`);

send.addEventListener(`click`, e => {
    e.preventDefault();
    let msg = document.querySelector(`#message`).value;
    let scroll_down = document.querySelector(`#history`);
    proba.addChat(msg)
    .then(function() {
        form_send.reset();
        scroll_down.scrollTop = scroll_down.scrollHeight;
    })
    .catch(err =>{
        console.log(`desio se error: ${err}`);
    })
});

