
// let btn = document.getElementById(`dugme`);
let input = document.getElementById(`unos`);
let lista = document.getElementById(`to_do`);
let dodaj_pocetak = document.getElementById(`na_pocetak`);
let dodaj_kraj = document.getElementById(`na_kraj`);


input.addEventListener(`keyup`, e => {
    
    // console.log(e.key, e.keyCode);
    if (e.keyCode == 13) {      // kljuc za enter je 13
        e.preventDefault();
        
        if (input.value.trim() != `` && dodaj_pocetak.checked == true) { // trimuje s pocetka i kraja
            let li_new = document.createElement(`li`);
            li_new.textContent = `${input.value}`;
            lista.appendChild(li_new);
            lista.insertBefore(li_new, lista.children[1]);
            input.value = ``;
        }
        else if (input.value.trim() != `` && dodaj_kraj.checked == true) {
            let li_new = document.createElement(`li`);
            li_new.textContent = `${input.value}`;
            lista.appendChild(li_new);
            input.value = ``;
        }
        else {
            alert(`Niste uneli obavezu`);
        }
    }
});

//////////////////////////////////////////////
//          importante
///////////////////////////////////////////////

lista.addEventListener(`click`, (e) => {
    // console.log(`kliknuto na ul`);
    if (e.target.tagName == `LI`) {
        // console.log(`kliknuto na LI`);
        e.target.remove();
    }
});

