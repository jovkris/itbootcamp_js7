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
let div_history = document.querySelector(`#history`);
let form_color = document.querySelector(`#form_color`);
let color_input = document.querySelector(`#color_pick`);
let date_form = document.querySelector(`#form_date`)
let date1 = document.querySelector(`#date1`);
let date2 = document.querySelector(`#date2`);

// pamcenje username-a

let username = () => {
    if (localStorage.username) {
        return localStorage.username
    }
    else{
        return `Anonymous`
    }
}

// pamcenje room-a

let room_refresh = () =>{
    if(localStorage.room){
        return localStorage.room
    }
    else{
        return `general`
    }
}

// pamcenje boje

let color_set = () => {
    if(localStorage.color){
        return localStorage.color
    }
    else{
        return `#C4D4F2`
    }
};
div_history.style.backgroundColor = color_set();

// Objekti klasa/ instance klasa

let chatroom = new Chatroom(room_refresh(), username());
let chatUI = new ChatUI(message_container);


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

// event listener za send button

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

// update username forma 

update.addEventListener(`click`, e =>{
    e.preventDefault();
    let user = document.querySelector(`#username`).value; // value inputa za usernname
    chatroom.username = user;
    update_form.reset();
    let updated = document.createElement(`h2`);
    div_history.appendChild(updated);
    updated.style.color = `white`;
    updated.style.textAlign =`center`;
    updated.style.position = `fixed`;
    updated.style.top = `0%`;
    updated.style.left = `0%`;
    updated.style.zIndex = `100`;
    
    updated.innerText = `Username : ${user}`;
    
    setTimeout(function() {
        updated.innerText = ``;
        location.reload();
    }, 3000);
    
});

// navigacija kroz sobe

chatroom_nav.addEventListener(`click`, event =>{
    if(event.target.tagName == `BUTTON`){
        chatUI.clear();
        chatroom.updateRoom(event.target.id); // iz chat metoda da ne salje 1000 puta istu poruku...
        chatroom.getChats(d =>{
            chatUI.templateLi(d);
        })
    }
});

// brisanje poruka

message_container.addEventListener(`click`, event =>{
    if (event.target.tagName == `IMG`) {
        let parent = event.target.parentElement;
        if(parent.classList.contains(`them`)){
            parent.remove();
        }
        else if(confirm(`Are you sure you want to permanently delete the message?`) && parent.classList.contains(`me`)){
            chatroom.deleteChat(event.target.parentElement.id);
            parent.remove();
        }
        else{
            console.log(`cancel was pressed`);
        }
        
    }
});

// promena boje chat history-a

form_color.addEventListener(`submit`, event =>{
    event.preventDefault();
    let color = color_input.value;
    setTimeout(() =>{
        div_history.style.backgroundColor = color;
    }, 500);
    localStorage.setItem(`color`, color);
});

// date filter

date_form.addEventListener(`submit`, event =>{
    event.preventDefault();
    if(date1.value != `` && date2.value != ``){
        let d1 = new Date(date1.value);
        let d2 = new Date(date2.value);
        console.log(date1.value);
        chatUI.clear();
        chatroom.getChats(data =>{
            let msg_date = data.data().created_at.toDate();
            if(msg_date >= d1 && msg_date <= d2){
                chatUI.templateLi(data);
            }
        });
    }
    date_form.reset();
});
