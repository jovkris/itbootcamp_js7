// ispisivanje brojeva od 1 do 5 koristeci while

let a = 1;
while (a <= 5) {
    console.log(`Na redu je broj ${a}`);
    a++;
}

// ISTI ZADATAK ALI FOR PETLJA

for (let i = 1; i <= 5; i++) {
    console.log(`For petlja iteracija ${i}`);
}


///////////////////////////////////////////////

// 2. Ispisati brojeve od 20 do 1

for (i = 20; i >= 1; i--) {
    console.log(i);
}

//////////////////////////////////////////////////

// 3. Ispisati samo parne brojeve od 1 do 20

// U FOR PETLJI NEMA LOGICKIH OPERACIJA

// 1. nacin
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// 2. nacin

for (i = 2; i <= 20; i += 2) {
    console.log(i);
}

//////////////////////////////////////////////////////////

// 5. Odrediti sumu brojeva od 1 do 5

console.log(`Odrediti sumu brojeva od 1 do n`);
let n = 100;
let suma = 0;
for (i = 1; i <= n; i++) {
    suma += i;
}
console.log(suma); // MORA DA IDE IZVAN FOR PETLJE DA NE BI ISPISIVAO SVAKI PUT

///////////////////////////////////////////////////////

// 7. ZADATAK

console.log(`Odrediti proizvod brojeva od n do m`);

n = 2;
let m = 6;
let p = 1;
for (i = n; i <= m; i++) {
    p *= i;
}
console.log(p);

////////////////////////////////////////////////////////

// 9. ZADATAK iz prezentacije

// <img src="img/1.jpg">
// <img src="img/2.jpg">
// <img src="img/3.jpg">

// for (i = 1; i <= 3; i++) {
//     document.body.innerHTML += `<img src="img/${i}.jpg">`;
// }

////////////////////////////////////////////////////////////

//  11. ZADATAK iz predavanja
let br = 0;
for (i = 5; i <= 150; i++) {
    if (i % 13 == 0) {
        br++;
    }
}
console.log(`Ima ${br} brojeva od 5 do 150 koji su deljivi sa 13`);


//////////////////////////////////////////////////////////

// aritmeticka sredina = suma brojeva podeljena sa brojem brojeva

// 12. 

br = 0;
n = 4;
m = 20;
suma = 0;
let aritSred;
for (i = n; i <= m; i++) {
    br++;
    suma += i;
}
aritSred = suma / br;
console.log(aritSred);



// 15. 

br = 0;
suma = 0;
n = 5;
m = 25;

for (i = n; i <= m; i++) {

    if (i % 10 == 4) {
        br++;
        suma += i;
    }
}
console.log(`Ima ${br} brojeva od n do m cija je poslednja cifra 4, i njihova suma je ${suma}`);

// 16. 

suma = 0;
n = 5;
m = 6;
a = 3;

for (i = n; i <= m; i++) {
    if (i % a != 0) {
        suma += i;
    }

}

console.log(`Suma brojeva od n do m koji nisu deljivi sa ${a} je ${suma}`);


///////////////////////////////////////////////

// 18. Odrediti sa koliko brojeva je deljiv broj k

// for petljom
let k = 6;
br = 0;
for (i = 1; i <= k; i++) {
    if (k % i == 0) {
        br++;
    }
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva`);

// while petljom

br = 0;
i = 1;
while (i <= k) {
    if (k % i == 0) {
        br++;
    }
    i++;
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva`);


// 19. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

// OVO JE NADOVEZANO NA PRETHODNI ZADATAK
if (br == 1) {
    console.log(`Broj nije ni prost ni slozen`);
}
else if (br == 2) {
    console.log(`Broj je prost`);
}
else {
    console.log(`broj je slozen`);
}

//////////////////////////////////////////////////////////


// 20.
let brRedova = 6;
let tabela = `<table border="1">`;
for (i = 1; i <= 6; i++)
    if (i % 2 == 0) {
        tablea +=
            `
        <tr class="roze">
            <td>Text</td>
            <td>Text</td>
        `
    }