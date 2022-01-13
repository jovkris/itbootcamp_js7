import Auto from "./auto.js";

let a1 = new Auto(`Citroen C4`, `crna`, false);

console.log(a1);
console.log(typeof a1);

let a2 = new Auto(`Skoda Octavia`, `plava`, true);
console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._ima_krov);

let a3 = new Auto(`Fiat Punto`, `bela`, false, 4);
console.log(a2);
console.log(a3._marka);
console.log(a3._boja);
console.log(a3._ima_krov);

console.log(a3);

let a4 = new Auto(`     `, `siva`, true);


a1.sviraj();
a2.sviraj();
a3.sviraj();
a4.sviraj();

a1.vozi(50);
a4.vozi(200);

// U klasi pisemo polja i metode
// Sva polja klase se definisu u constructor
//Mozemo dodavati proizvoljne metode
// Svi objekti klase imace polja i metode navedene u klasi

a1._broj_vrata = 4; // poljima se pristupa bez zagrade
a1.sviraj(); // metode imaju zagrade a izmedju zagrada se navode parametri
a1.marka = `    Audi A4`;
// a1.postavi_marku(`    Audi A4`);
console.log(a1);
console.log(a1.marka);

let a5 = new Auto(`    Audi A4`, `plava`, false, 3);
console.log(a5);

a3.stampaj();

