console.log("if else grananje");

if(false) {
    console.log("Uslov je ispunjen");
}
else {
    console.log("Uslov je ispunjen")
    }

/////////////////////////////////////

a = 10;
b = 7;
if(a < b) {
    console.log("Broj a je strogo manji od broja b");
}
else {
    console.log("Broj a je veci ili jednak broju b");
}


// `` se ponasaju kao navodnici, s tim sto promenljive stavimo kao $ i promenljivu i on ispisuje njihove vrednosti

a = 10;
b = 7;
if(a < b) {
    console.log(`Broj ${a} je strogo manji od broja ${b}`);
}
else {
    console.log(`Broj ${a} je strogo manji od broja ${b}`);
}

//////////////////////////////

let god = 27;
if(god >= 18) {
    console.log("osoba je punoletna");
}
else {
    console.log("osoba je maloletna");
}

///////////////////////////////////////

// ZADACI ZA VEZBANJE

// 1. ZADATAK

a = 10;
b = 17;
if(a > b) {
    document.write("broj a je veci od broja b");
}
else {
    document.write("broj b je veci od broja a");
    
}



// 2. ZADATAK

let temp = -17;

if(temp < 0) {
    document.write("Temperatura je ispod nule");
}
else {
    document.write("Temperatura je iznad nule");
}
////////////////// drugi nacin za zadatak


// 3. ZADATAK

let pol = "m";

if(pol == "m") {
    // prikazi avatar muskarca
    document.body.innerHTML += `<img src="">`;
}
else {
    // prikazi avatar zene
    document.body.innerHTML += `<img src="">`;
}


// 4. ZADATAK

let datum = new Date();

let vreme = datum.getHours();

if(vreme > 12) {
    console.log("Trenutno je popodne");
}
else {
    console.log("Trenutno je jutro");
}


// 5. ZADATAK

god = datum.getFullYear(); 
let godRodjenja = 1992;



if(god - godRodjenja >= 18) {
    console.log("Osoba je punoletna");
}
else {
    console.log("Osoba je maloletna");
}

// 6. ZADATAK  VEOMA VAZAN KONCEPT!!!!!

let b1 = 15;
let b2 = 9;
let b3 = 27;

let maks = b1; //pretpostavka
// ako je moja pretpostavka losa, uradim njen update
if(maks < b2) {
    maks = b2;
}
if(maks < b3){
    maks = b3;
}

document.body.innerHTML += `<p> ${maks} </p>`;

