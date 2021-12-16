function sum(a, b) {
    return a + b;
}

console.log(sum(5, 6));

// Anonimne funkcije

let suma = function (a, b) {
    return a + b;
}

console.log(suma(6, 6));

// arrow funkcija je kraci zapis anonimne funkcije

let suma3 = (a, b) => {
    return a + b;
}
console.log(suma3(5, 6));

// Arrow f-ja za ispis poruke

let hello = () => {
    console.log(`Hello world!`);
}

hello();

let pozdrav = (ime, prezime) => {
    console.log(`Zdravo ${ime} ${prezime}!`);
}
pozdrav(`Kristina`, `Jovanovic`);

// Arrow f-ja kojoj se prosledjuju ime i godine korisnika a ona ispisuje ime i da li je korisnik punoletan ili ne.

let daLi = (ime, godine) => {
    if (godine >= 18) {
        let poruka = `Korisnik ${ime} je punoletna osoba`;
        document.body.innerHTML += `<p style="color: blue;">${poruka}</p>`;
    }
    else {
        let poruka = `Korisnik ${ime} je maloletna osoba`;
        document.body.innerHTML += `<p style="color: green;">${poruka}</p>`;
    }
}

daLi(`Kristina`, 29);
daLi(`David`, 12);

// 3. ZADATAK

let neparan = (n) => {
    if (n % 2 == 0) {
        return false;
    }
    else {
        return true;
    }
}

console.log(neparan(7));

// A MOZE I OVAKO!!!

let paran = n => (n % 2 == 0); // = (n % 2 == 0) ? true : false;

console.log(paran(5));

// 4. ZADATAK

// a.

let maks2 = (n, m) => {
    if (n >= m) {
        return n;
    }
    else {
        return m;
    }
}
console.log(maks2(5, 20));

// b. OVDE

let maks4 = (a, b, c, d) => {
    return maks2(maks2(a, b), maks2(c, d));
}

// A MOZE I OVAKO!!!!

let maks4DN = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));

// A MOZE I OVAKO!!!!

let maks4TN = (a, b, c, d) => max2(max2(max2(a, b), c), d);


// console.log(maks4(4, 7, 15, 25));



// 5. ZADATAK

let slikau = (img) => {
    document.body.innerHTML += `<img src="${img}"/>`
}

slikau(`https://www.solutionsiq.com/wp-content/uploads/2015/08/Hamster-wheel.jpg`);

// 6. ZADATAK

let bojaTexta = (boja, tekst) => {
    document.body.innerHTML += `<p style="color: ${boja}">${tekst}</p>`;
}

bojaTexta(`red`, `Evo jedan tekst ovde.`);

// 7. ZADATAK

let sedmiDan = n => {
    if (n % 7 == 0) {
        console.log(`nedelja`);
    }
    else if (n % 7 == 1) {
        console.log(`ponedeljak`);
    }
    else if (n % 7 == 2) {
        console.log(`utorak`);
    }
    else if (n % 7 == 3) {
        console.log(`sreda`);
    }
    else if (n % 7 == 4) {
        console.log(`cetvrtak`);
    }
    else if (n % 7 == 5) {
        console.log(`petak`);
    }
    else if (n % 7 == 6) {
        console.log(`subota`);
    }
}

sedmiDan(20);

let mjesec = n => {
    if (n % 12 == 0) {
        console.log(`januar`);
    }
    else if (n % 12 == 1) {
        console.log(`februar`);
    }
    else if (n % 12 == 2) {
        console.log(`mart`);
    }
    else if (n % 12 == 3) {
        console.log(`april`);
    }
    else if (n % 12 == 4) {
        console.log(`maj`);
    }
    else if (n % 12 == 5) {
        console.log(`jun`);
    }
    else if (n % 12 == 6) {
        console.log(`jul`);
    }
    else if (n % 12 == 7) {
        console.log(`avgust`);
    }
    else if (n % 12 == 8) {
        console.log(`septembar`);
    }
    else if (n % 12 == 9) {
        console.log(`oktobar`);
    }
    else if (n % 12 == 10) {
        console.log(`novembar`);
    }
    else if (n % 12 == 11) {
        console.log(`decembar`);
    }

}

// U JEDNOM REDU OVAJ ZADATAK

let sedmizadatak = n => (n % 7 == 0) ? `nedelja` : (n % 7 == 1) ? `ponedeljak` : (n % 7 == 2) ? `utorak` : (n % 7 == 3) ? `sreda` : (n % 7 == 4) ? `cetvrtak` : (n % 7 == 5) ? `petak` : (n % 7 == 6) ? `subota` : `nedelja`;
// kada se arrow funkcija sastoji samo iz return stejtmenta

/*      KAO OVDE

let maks4 = (a, b, c, d) => {
    return maks2(maks2(a, b), maks2(c, d));
}
*/

let nesto = (nekiParametar) => `<p>${nekiParametar}</p>`;

document.body.innerHTML += nesto(`neki parametarnapisan eeee`)

// Kada se arrow funkcija sastoji iz samo jednog parametra nije potrebno stavljati ga u zagrade.

let nesto2 = nekiParametar => `<p>${nekiParametar}</p>`;



// 8. ZADATAK

let deljivSaTri = (n, m) => {
    let brojevi = ` `;
    let br = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            brojevi += ` ` + i;
            br++;
        }
    }
    return `ima ${br} brojeva deljivih sa 3 i to su ${brojevi}`;
}

console.log(deljivSaTri(1, 15));



// 9. ZADATAK

let sumiraj = (n, m) => {
    let suma = 0;
    for (i = n; i <= m; i++) {
        suma += i;
    }
    return suma;
}

console.log(sumiraj(1, 15));

// 10. ZADATAK

let mnozi = (n, m) => {
    for (i = n; i <= m; i++) {

    }
}
