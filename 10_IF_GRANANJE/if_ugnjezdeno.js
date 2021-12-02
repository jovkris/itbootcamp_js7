//19. ZADATAK


let b1 = 5;
let b2 = 2;
let b3 = 4;

if (b1 > b2) {
    if (b1 > b3) {
        console.log(`Broj ${b1} je najveci`);
        if (b2 > b3) {
            console.log(`Broj ${b2} je srednji`);
            console.log(`Broj ${b3} je najmanji`);
        }
        else {
            console.log(`Broj ${b3} je srednji`);
            console.log(`Broj ${b2} je najmanji`);
        }
    }
    else {
        console.log(`Broj ${b1} je srednji`);
        if (b2 > b3) {
            console.log(`Broj ${b2} je najveci`);
            console.log(`Broj ${b3} je najmanji`);
        }
        else {
            console.log(`Broj ${b2} je najmanji`);
            console.log(`Broj ${b3} je najveci`);
        }
    }
}
