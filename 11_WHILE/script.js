// let i = 1;
// console.log(i); // 1 u konzoli
// i++;
// console.log(i); // 2
// i++;
// console.log(i); // 3
// i++;
// console.log(i); // 4
// i++;
// console.log(i); // 5

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log(`Vrednost promenljive i je ${i}`); //  6


//////////////////////////////////////
// ZADACI SA PREDAVANJA

//  1  ZADATAK

// a) Svaki broj u posebnom redu

i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}

// b) Svi brojevi u istom redu
let rez = "";
i = 1;
while (i <= 20) {
    rez = rez + i + " ";
    i++
}
console.log(rez);

//  2  ZADATAK ispisati brojeve od 20 do 1

i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}

//  3  ZADATAL ispisati parne brojeve od 1 do 20

i = 1;
while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

//drugi nacin

i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// 4  ZADATAK

// document.body.innerHTML += "<p style='color: red;'>Prvi paragraf</p>";
// document.body.innerHTML += "<p style='color: purple;'>Drugi paragraf</p>";
// document.body.innerHTML += "<p style='color: bgreen;'>Treci paragraf</p>";
// document.body.innerHTML += "<p style='color: red;'>Cetvrti paragraf</p>";
// document.body.innerHTML += "<p style='color: purple;'>Peti paragraf</p>";
// document.body.innerHTML += "<p style='color: bgreen;'>Sesti paragraf</p>";

let n = 6;
i = 1;

while (i <= n) {
    // Doda se paragraf
    if (i % 3 == 1) {
        document.body.innerHTML += `<p style='color: red;'>${i}.paragraf</p>`;
    }
    else if (i % 3 == 2) {
        document.body.innerHTML += `<p style='color: purple;'>${i}.paragraf</p>`;
    }
    else {
        document.body.innerHTML += `<p style='color: green;'>${i}.paragraf</p>`;
    }
    i++;
}

//  6. ZADATAK Odrediti sumu brojeva od 1 do 100

i = 1;
let suma = 0;
while (i <= 100) {
    suma += i;
    i++;
}
console.log(suma);

/* 

--------------------------------------------
#Iteracije    |     i      |   suma
--------------------------------------------
      0       |      1      |     0

      1       |      2      |    1
      2       |      3      |    3
      3       |      4      |    6
      4       |      5      |    10
    100       |     101     |   5050
*/


// Odrediti sumu brojeva od 1 do n

n = 18;
i = 1;
suma = 0;
while (i <= n) {
    suma += i;
    i++;
}
console.log(suma);

// Odrediti proizvod brojeva od n do m

n = 4;
let m = 6;
let proizvod = 1;
i = n;
while (i <= m) {
    proizvod *= i;
    i++;
}
console.log(proizvod);

//  10. ZADATAK  odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 1;
m = 3;
let sumaKP = 0;
let sumaQN = 0;
i = n;


while (i <= m) {
    if (i % 2 == 0) {
        sumaKP += i * i;
    }
    else if (i % 3 == 0) {
        sumaQN += i * i * i;
    }
    i++;
}
console.log(`Suma kvadrata parnih brojeva je ${sumaKP} dok je suma kubova neparnih brojeva ${sumaQN}`);


//  11.  ZADATAK  Odrediti sa koliko brojeva je deljiv broj k

let k = 9;
i = 1;

