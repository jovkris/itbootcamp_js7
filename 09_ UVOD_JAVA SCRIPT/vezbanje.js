// ZADATAK 1

let s = 15;
let m = 21;

let odPonoci = s * 60 + m;
console.log("Od ponoci je proslo " + odPonoci + " minuta");

let doPonoci = 24 * 60 - odPonoci;
console.log("Do ponoci je ostalo: " + doPonoci + " minuta");

// ZADATAK 2

let minOdPonoci = 921; 
// minOdPonoci = ...... * 60 + minSada
//(minOdPonoci - minSada) / 60

let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) / 60;
console.log("Sada je " + satSada + ":" + minSada);

// //drugi nacin za 2 zadatak
// Math.floor(minOdPonoci / 60); // oduzima decimalu
// Math.ceil(minOdPonoci / 60); // povecava na veci broj ako ima decimalu
// Math.round(minOdPonoci / 60); // zaokruzi matematicki kako inace ucimo he he
let satSada2 = Math.floor(minOdPonoci / 60);
let minSada2 = minOdPonoci % 60;
console.log("Sada je " + satSada2 + ":" + minSada2);


//  ZADATAK 3

let cenaRobe = 1750;
let novcanica = 2000;

let kusur = novcanica - cenaRobe;
console.log("Kusur koji treba da se vrati je " + kusur + " dinara");




// ZADATAK 6

let mojiEvri = 100;
let kursEvra = 117.58;

let mojiDinari = mojiEvri * kursEvra;
console.log("Moji dinari nakon razmene: " + mojiDinari);


let bekTuEvri = mojiDinari / kursEvra;
console.log("Moji evri nakon razmene: " + mojiDinari / kursEvra);





// ZADATAK 7

let mojiEvri2 = 750;
let evroDinar = 117.58;
let dolarDinar = 104.72;

let din = mojiEvri2 * evroDinar;
let usd = din / dolarDinar;

console.log("Ja imam: " + usd + " dolara");

// Trenutno vreme i datum

let datum = new Date(); // datum - objekat koji sadrzi trenutni info o trenutnom datumu i vremenu

let mesec = datum.getMonth() + 1;

let godina = datum.getFullYear();

let datumUMesecu = datum.getDate(); // datum u mesecu

let danUNedelji = datum.getDay(); // dan u nedelji
console.log("Danas je "+ datumUMesecu + "." + mesec + "." +godina);

console.log(danUNedelji);

