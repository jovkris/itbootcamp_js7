console.log(`hey`);

// 1. DOHVATI HTML ELEMENT na koji zelis da postavis osluskivac

let p_klikni = document.getElementById(`klikni`);

// 2. Na element POSTAVLJAMO OSLUSKIVAC

p_klikni.addEventListener(`click`, () => {
    console.log(`Jednom kliknuto na paragraf.`);
});

//////////////////////////////////////////////////////

let p_dubble_click = document.getElementById(`dva_klika`);

p_dubble_click.addEventListener(`dblclick`, () => {
    console.log(`Dvaput se kliknulo na drugi paragraf.`);
});

////////////////////////////////////////////////////////

let btn_plus = document.getElementById(`plus`);

let res = 0;
let sp_res = document.getElementById(`res`);
btn_plus.addEventListener(`click`, () => {
    res++;
    sp_res.innerHTML = res;
    if (res > 0) {
        sp_res.style.color = `red`;
    }
    else {
        sp_res.style.color = `blue`;
    }
});

let btn_minus = document.getElementById(`minus`);

btn_minus.addEventListener(`click`, () => {
    res--;
    sp_res.innerHTML = res;
    if (res < 0) {
        sp_res.style.color = `blue`;
    }
    else {
        sp_res.style.color = `red`;
    }
});

////////////////////////////////////////////////////////

let btn_hello = document.getElementById(`hello`);
let input_ime = document.getElementById(`ime`);
let p_hello_ispis = document.getElementById(`hello_ispis`);

btn_hello.addEventListener(`click`, () => {
    let input_ime_value = input_ime.value;
    p_hello_ispis.innerHTML = `Hello ${input_ime_value}`;
});