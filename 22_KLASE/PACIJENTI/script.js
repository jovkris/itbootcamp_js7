import { Pacijent } from "./pacijent.js";

let p1 = new Pacijent(`Jelena`, 173, 66);
let p2 = new Pacijent(`Ana`, 180, 72);
let p3 = new Pacijent(`Pera`, 190, 140);
let p4 = new Pacijent(`Mika`, 167, 57);
let p5 = new Pacijent(`Mila`, 150, 70);

let pacijenti = [p1, p2, p3, p4, p5];



// ispisati podatke o pacijentu sa najmanjom tezinom
let btn_min_tez = document.getElementById(`min_tez`);
let span_min_tez_rez = document.getElementById(`min_tez_rez`);
btn_min_tez.addEventListener(`click`, () => {
    let min = pacijenti[0]; // poziva getter (ovo tezina je getter yo)
    pacijenti.forEach(p => {
        if (min.tezina > p.tezina) {
            min = p;
        }
    });
    span_min_tez_rez.innerHTML = min.stampaj_listu();
    // console.log(min);
    // min.stampaj();

});

// ispisati podatke o pacijentu sa najvecom bmi vrednoscu

let btn_max_bmi = document.querySelector(`#max_bmi`);
let span_max_bmi_rez = document.querySelector(`#max_bmi_rez`);

btn_max_bmi.addEventListener(`click`, () => {
    // console.log(`hola`);
    let max_bmi = pacijenti[0];
    for(let i=1; i<pacijenti.length; i++){
        if (max_bmi.bmi() < pacijenti[i].bmi()) {
            max_bmi = pacijenti[i];
        }
    }
    span_max_bmi_rez.innerHTML = max_bmi.stampaj_listu();
});


