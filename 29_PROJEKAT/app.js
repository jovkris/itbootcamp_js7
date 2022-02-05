import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM

let message_container = document.querySelector(`ul`);
let send = document.querySelector(`#send`);
let form_send = document.querySelector(`#form_send`);
let update = document.querySelector(`#update`); // update button
let update_form = document.querySelector(`#form_username`); // forma za juzera
let chatroom_nav = document.querySelector(`nav`);
let msg_textarea = document.querySelector(`#message`);

// pamcenje username-a i room-a
let username = () => {
    if (localStorage.username) {
        return localStorage.username
    }
    else{
        return `Anonymous`
    }
}


let room_refresh = () =>{
    if(localStorage.room){
        return localStorage.room
    }
    else{
        return `general`
    }
}

// Objekti klasa/ instance klasa
let chatroom = new Chatroom(room_refresh(), username());
let chatUI = new ChatUI(message_container);

// DEMONSTRACIJA postavljanja vrednosti u LOCAL STORAGE 
// U local storage se sve cuva kao string :D

// localStorage.setItem("username","Default");

// UZIMANJE VREDNOSTI IZ LOCAL STORAGE-A
// let korisnik = localStorage.username;
// console.log(korisnik);

/////////////////////////////////////////////////////////


//ispis dokumenata iz db na stranici

chatroom.getChats((par)=>{ // ocekivanje parametra jer callback
    chatUI.templateLi(par); // realizacija callback-a
});

// event listener za keypress u textarea.
msg_textarea.addEventListener(`keyup`, event =>{
    if(event.which === 13){
        event.preventDefault();
        let msg = msg_textarea.value;
        msg_textarea.value =``;
        let scroll_down = document.querySelector(`#history`);
        chatroom.addChat(msg)
        .then(function() {
            form_send.reset();
            scroll_down.scrollTop = scroll_down.scrollHeight;
        })
        .catch(err =>{
            console.log(`desio se error: ${err}`);
        })
    }

   
    
});
/////////////////////////////////////////

send.addEventListener(`click`, e => {
    e.preventDefault();
    
    let msg = msg_textarea.value;
    msg_textarea.value = ``;
    let scroll_down = document.querySelector(`#history`);
    chatroom.addChat(msg)
    .then(function() {
        form_send.reset();
        scroll_down.scrollTop = scroll_down.scrollHeight;
    })
    .catch(err =>{
        console.log(`desio se error: ${err}`);
    })
});

// update username forma OVO NE VRACA PROMIS I NEMA THEN I CATCH!!!

update.addEventListener(`click`, e =>{
    e.preventDefault();
    let user = document.querySelector(`#username`).value; // value inputa za usernname
    chatroom.username = user;
    update_form.reset();
});

chatroom_nav.addEventListener(`click`, event =>{
    if(event.target.tagName == `DIV`){
        chatUI.clear();
        chatroom.updateRoom(event.target.id); // iz chat metoda da ne salje 1000 puta istu poruku...
        chatroom.getChats(d =>{
            chatUI.templateLi(d);
        })
    }
})

