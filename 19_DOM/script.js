console.log(`yo`);

console.log(document);
console.log(typeof document);

console.log(document.body);

let p1 = document.getElementById(`p1`);

console.log(p1);


let cont = document.getElementsByClassName(`container`);
console.log(cont);
console.log(typeof cont); // bice object tipa HTML collection kojem se ne moze pristupiti sa forEach

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
};

// cont.forEach(element => {  ovo ne moze ovakoooooo
//     console.log(element);
// });


//////////////////////////////////////////////////
let cont_niz = Array.from(cont); // kreira niz od cont koji je kolekcija
//////////////////////////////////////////////////
cont_niz.forEach(element => {
    console.log(element);
});

let paragrafi = document.getElementsByTagName(`p`);
console.log(paragrafi); // fraca html kolekciju

for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
};

let linkovi = document.getElementsByName(`link`);
for (let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
}

p1 = document.querySelector(`#p1`); // mora kako bi ga u css selektovali
console.log(p1); // vraca samo jedan

cont = document.querySelector(`.container`); // mora kako bi ga u css selektovali
console.log(cont); // vraca samo jedan

cont = document.querySelectorAll(`.container`);
console.log(cont); // vraca node listu kojoj mozemo pristupiti kroz forEach

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

cont.forEach(element => {
    console.log(element);
});

paragrafi = document.querySelectorAll(`p`);
console.log(paragrafi);

linkovi = document.querySelectorAll(`[name='link']`);
console.log(linkovi);

// Dohvatiti prvi paragraf na stranici

let prvi_paragraf = document.querySelector(`p`);


// Dohvatiti prvi div tag sa klasom „error“.

let p_error = document.querySelector(`.error`);


// Dohvatiti poslednji red u tabeli.

let tabela = document.querySelector(`table tr:last-child`);


// Dohvatiti sve linkove na stranici.

linkovi = document.querySelectorAll(`a`);


// Dohvatiti sve slike na stranici.

let slike = document.querySelectorAll(`img`);


console.log(prvi_paragraf, p_error, tabela, linkovi, slike);

p1.innerHTML += ` promenjen text`;

let svi_linkovi = document.querySelectorAll(`a`);

svi_linkovi.forEach(link => {
    // HTML atributi
    link.href = `https://www.google.com`;
    link.target = `_blank`; // da otvori u novi tab

    // CSS stilovi
    link.style.color = `green`;
    link.style.textDecoration = `none`;

    // link.style = `color: green`; moze i ovako ako imas puno stilova za grupu elemenata

    // preko metode

    link.setAttribute(`name`, `link2`); // isto kao i link.name = `link2`;

});

// ZADACI ZA VEZBANJE SLAJD 9

// p1.forEach(element => {
//     element.innerHTML += `VAZNO!!!`;
// });

let div_error = document.querySelectorAll(`div.error`);

div_error.forEach(element => {
    element.innerHTML += `<h1>Greska</h1>`;
});

// let n = document.querySelectorAll(`p`).length;

let svi_paragrafi = document.querySelectorAll(`p`);


let i = 1;
svi_paragrafi.forEach(paragraf => {
    paragraf.innerHTML += `${(i * i)}`;
    i++;
});

let sve_slike = document.querySelectorAll(`img`);

sve_slike.forEach(element => {
    element.alt = `ups`;
});

console.log(svi_linkovi);

svi_linkovi.forEach((link, index) => {
    link.style.padding = `5px`;
    link.style.fontSize = `18px`;
    link.style.textDecoration = `none`;
    if (index % 2 != 0) {
        link.style.backgroundColor = `green`;
        link.style.color = `purple`;
    }
    else {
        link.style.backgroundColor = `blue`;
        link.style.color = `white`;
    }
});


let niz_imena = [`Tina`, `Dina`, `Mina`];

niz_imena.forEach(ime => {
    if (ime.startsWith(`S`)) {
        document.body.innerHTML += `<a href="#" class="imena" target="_blank">${ime}</a>`;
    }
    else {
        document.body.innerHTML += `<a href="#" class="imena">${ime}</a>`;
    }

});


let lista_string = `<ul>`;
niz_imena.forEach((ime, index) => {
    if (index % 2 == 0) {
        lista_string += `<li style="color: red">${ime}</li>`;
    }
    else {
        lista_string += `<li style="color: blue">${ime}</li>`;
    }
});
lista_string += `</ul>`;
document.body.innerHTML += lista_string;


svi_paragrafi.forEach((p, index) => {
    if (index % 2 != 0) {
        p.classList.add(`error`);
    }
    else {
        p.classList.add(`success`);
    }

});


console.log(svi_paragrafi);