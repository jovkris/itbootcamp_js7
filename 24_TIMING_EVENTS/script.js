////////////////////////////////////////////////////////
//              SET TIMEOUT
////////////////////////////////////////////////////////

// funkcija se izvrsava JEDNOM nakon definisanog vremenskog perioda u milisekundama


console.log(`1`);
console.log(`2`);


window.setTimeout(() => {   // window je opcionalno ali najpravilnije
    console.log(`3`);
}, 4000);  // ili 1000 * 4

/*

setTimeout(function () {
    console.log(`3`);
}, 3000);


function ispis() {
    console.log(`3`);
}
setTimeout(ispis,2000); // kod callback funkcije se ne stavljaju zagrade u parametru
*/


// ZADATAK

// klikom na dugme ispisati poruku u konzoli nakon 2 sekunde

let btn1 = document.getElementById(`btn1`);
let btn2 = document.getElementById(`btn2`);
let btn3 = document.getElementById(`btn3`);
let btn4 = document.getElementById(`btn4`);
let div = document.getElementById(`result`);
let ispis = document.getElementById(`ispis`);
let clock = null;
let timer = null;

btn1.addEventListener(`click`, function () {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();

    if (timer === null) {
        timer = setTimeout(() => {
            div.innerHTML = `${sati}:${minuti}:${sekunde}`;
            timer = null;
        }, 2000);
    }

});

btn2.addEventListener(`click`, function () {
    clearTimeout(timer); // za prekid izvrsenja asinhronog koda
    timer = null;
});

////////////////////////////////////////////////////////////
//                 SET INTERVAL
////////////////////////////////////////////////////////////

// Funkcija se izvrsava svaki put nakon definisanog vremenskog perioda

btn3.addEventListener(`click`, function () {
    if (clock === null) {
        clock = setInterval(() => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            ispis.innerHTML = `${sati}:${minuti}:${sekunde}`;

        }, 1000 / 10);
    }
});

btn4.addEventListener(`click`, function () {
    clearInterval(clock);
    clock = null;
});


let btn5 = document.getElementById(`btn5`);
let btn6 = document.getElementById(`btn6`);
let prikaz_input = document.getElementById(`prikaz`);
let br = 1;
let odbrojavanje = null;

btn5.addEventListener(`click`, function () {
    if (odbrojavanje === null) {
        odbrojavanje = setInterval(() => {
            prikaz_input.value = `${br}`;
            br++;
        }, 1000);
    }
});

btn6.addEventListener(`click`, function () {
    clearInterval(odbrojavanje);
    odbrojavanje = null;
});

