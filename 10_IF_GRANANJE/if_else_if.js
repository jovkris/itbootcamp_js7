
let ocena = 4;
if(ocena == 5) {
    console.log("Odlican 5");
}
else if(ocena == 4) {
    console.log("Vrlo dobar 4");
}
else if(ocena == 3) {
    console.log("Dobar 3");
}
else if(ocena == 2) {
    console.log("Dovoljan 2");
}
else if(ocena == 1) {
    console.log("Nedovoljan 1");
}
else {
    console.log("Pogresan unos");
}

console.log("Kod nakon if - else if");

////////////////////////////////

// ZADACI ZA VEZBANJE

// 7. ZADATAK

let poeni = 75;

if(poeni < 50) {
    console.log("Ucenik je pao ispit");
}
else if(poeni < 60) {
    console.log("Ucenik je polozio ispit sa ocenom 6");
}
else if(poeni < 70) {
    console.log("Ucenik je polozio ispit sa ocenom 7");
}
else if(poeni < 80) {
    console.log("Ucenik je polozio ispit sa ocenom 8");
}
else if(poeni < 90) {
    console.log("Ucenik je polozio ispit sa ocenom 9");
}
else if(poeni <= 100) {
    console.log("Ucenik je polozio ispit sa ocenom 10");
}
else {
    console.log("pogresno uneti poeni");
}



//////////////////////////////////

// 8. ZADATAK

let date = new Date();

let dan = date.getDay();  // hvala

if(dan == 6) {
    console.log("Neradni dan");
}
else if(dan == 0) {
    console.log("Neradni dan");
}
else {
    console.log("Radni dan");
}

//9. ZADATAK

let vreme = date.getHours();

if(vreme < 12) {
    console.log("Dobro jutro");
}
else if(vreme < 18) {
    console.log("Dobar dan");
}
else {
    console.log("Dobro vece");
}

// 10. ZADATAK

let d1 = 1;
let m1 = 5;
let g1 = 1960;

let d2 = 7;
let m2 = 9;
let g2 = 2000;

if(g1 < g2){
    console.log("Prvi datum je raniji");
}
else if(g1 > g2) {
    console.log("drugi datum je raniji");
}
else if(m1 < m2) {
    console.log("prvi datum je raniji");
}
else if(m1 > m2) {
    console.log("drugi datum je raniji");
}
else if(d1 < d2) {
    console.log("prvi datum je raniji");
}
else if(d1 > d2) {
    console.log("drugi datum je raniji");
}
else {
    console.log("Dadumi su isti");
}

// 11. ZADATAK

let radnoVreme = date.getHours();



if(radnoVreme < 9) {
    console.log("Firma ne radi");
}
else if(radnoVreme < 17) {
    console.log("Firma radi");
}
else {
    console.log("Firma ne radi");
}


// 12. ZADATAK

let p1 = 14;
let k1 = 10;
let p2 = 6;
let k2 = 21;

if (k1 < p2) {
        console.log("ne poklapaju se");
}
else if (k2 < p1) {
    console.log("ne poklapaju se");
}
else {
    console.log("preklapaju se");
}

// 13. ZADATAK

let nekiBroj = 71;

if (nekiBroj % 2 == 0) {
    console.log("Broj je paran");
}
else {
    console.log("broj je neparan");
}

// 14. ZADATAK

nekiBroj = 71;

if (nekiBroj % 3 == 0) {
    console.log("Broj je deljiv");
}
else {
    console.log("broj nije deljiv");
}

// 15. ZADATAK

let b1 = 12;
let b2 = 5;
let veci;

if(b1 > b2) {
    veci = b1;
    console.log(veci - b2 + " je rezultat");
}
else if(b1 < b2) {
    veci = b2;
    console.log(veci - b1 + " je rezultat");
}
else {
    console.log(0 + " brojevi su iste vrednosti");
}


// 16. ZADATAK

let num = 7;
if (num <= 0) {
    num = num - 1; // isto kao num -- ili num -= 1
    console.log(broj);
}
else {
    num = num + 1;// isto kao num ++ ili num += 1
    console.log(num);
}

// 17. ZADATAK

let x1 = 5;
let x2 = 6;
let x3 = 9;

let max = x1;
if (max < x2) {
    max = x2;
}
if (max < x3) {
    max = x3;
}
console.log(`Najveci broj je ${max}`);

// Najmanji broj

let min = x1;
if (min >x2) {
    min = x2;
}
if (min > x3) {
    min = x3;
}
console.log(`Najmanji broj je ${min}`);

// SREDNJI BROJ

let srednji = x1 + x2 + x3 - min - max;

console.log(`srednji broj je ${srednji}`);

// 18. ZADATAK

// 1. nacin

let s = 15.3;
if (s % 1 == 0) {
    console.log(`broj ${s} je ceo broj`);
}
else {
    console.log(`broj ${s} nije ceo broj`);
}

// 2. nacin

console.log(Math.floor(s));
if (Math.floor(s) == s) {
    console.log(`${s} je ceo broj`);
}
else {
    console.log(`${s} nije ceo broj`);
}


////////////////////////////////////////


