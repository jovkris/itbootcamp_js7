console.log("Logicki operatori");

// ZADATAK IZ PREDAVANJA

// priorited logickih operatora:
    // ! NEGACIJA
    // && AND
    // || or

// if (!true && true) --> false
//if (!true && true || false) --> (false && true || false -> (false || false) --> false
// ZATO PISATI OVAKO:
    // (!true && true) || false)

let pol = "z";
let god = 17;

if (pol == "m" && god >= 18) {
    console.log(`Osoba je muskog pola i punoletna.`);
}
else if (pol == "m" && god < 18 && god >= 0) {
    console.log(`Osoba je muskog pola i maloletna.`);
}
else if (pol == "z" && god >= 18) {
    console.log(`Osoba je zenskog pola i punoletna`);
}
else if (pol == "z" && god < 18 && god >= 0) {
    console.log(`Osoba je zenskog pola i maloletna`);
}
else {
    console.log(`Pogresno uneti podaci`);
}

/////////////////////////////////////////////

pol = "z";
if(pol == "z" || pol == "Z") {
    console.log(`mmmda zensko`);
}
else if (pol == "m" || pol == "M") {
    console.log(`mmmmda musko`);
}
else {
    console.log(`pogresan unos`);
}


////////////////////////////////////////
// KOMBINOVANJE LOGICKIH OPERATORA
pol = "M";
god = 15;

if ((pol == "z" || pol == "Z") && god >= 18) {
    console.log(`Osoba je zenskog pola i punoletna`);
}
else if ((pol == "z" || pol == "Z") && god <= 18 && god >= 0) {
    console.log(`Osoba je zenskog pola i maloletna`);
}
else if ((pol == "m" || pol == "M") && god >=18) {
    console.log(`Osoba je muskog pola i punoletna`);
}
else if ((pol == "m" || pol == "M") && god >= 0 && god < 18) {
    console.log(`Osoba je muskog pola i maloletna`);
}
else {
    console.log(`Pogresan unos`);
}

