console.log(`wassup yo`);

function zdravo() {
    console.log(`Zdravo svete!!!`);
}

zdravo();

/////////////////////////////////

function stampaj(tekst) {
    console.log(tekst);
}

stampaj(`Jelena`);
stampaj(`stefan`);

let ime = `Kristina`;
stampaj(ime);


//////////////////////////

function korisnik(ime, prezime) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime}.`);
}

korisnik(`Stefan`, `Stanimirovic`);
korisnik(`Jelena`, `Matejic`);

////////////////////////////////

function korisnikGodine(ime, prezime, godine) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina.`);
}
korisnikGodine(`kristina`, `jovanovic`, 29);
korisnikGodine(`Pera`, `Peric`, 20);

///////////////////////////////////

function zbirDvaBroja(x, y) {
    let zbir = x + y;
    console.log(zbir);
}
zbirDvaBroja(15, 12);

/////////////////////////////////

function vratiZbirDvaBroja(a, b) {
    let zbir = a + b;
    return zbir;
}

let rez = vratiZbirDvaBroja(50, 70);
console.log(rez);

rez = vratiZbirDvaBroja(16, 15);
console.log(rez);

let rez1 = vratiZbirDvaBroja(4, 6);
let rez2 = vratiZbirDvaBroja(5, 7);

let rez3 = vratiZbirDvaBroja(rez1, rez2);
console.log(rez3);

let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));
console.log(rez6);

///////////////////////////////////////////////

function voda(temperatura) {
    if (temperatura <= 0) {
        console.log(`Voda je u cvrstom stanju.`);
    }
    else if (temperatura >= 100) {
        console.log(`Voda je u gasovitom stanju.`);
    }
    else {
        console.log(`Voda je u tecnom stanju.`);
    }
}

voda(7);
voda(100);



////////////////////////////////////////////

// ZADACI ZA VEZBU

// 2. ZADATAk


function zbirDrugiZadatak(a, b, operacija) {
    if (operacija == `+`) {
        let rezultat = a + b;
        console.log(rezultat);
    }
    else if (operacija == `-`) {
        let rezultat = a - b;
        console.log(rezultat);
    }
    else if (operacija == `*`) {
        let rezultat = a * b;
        console.log(rezultat);
    }
    else if (operacija == `/`) {
        if (b == 0) {
            console.log(`Deljenje nulom nije dozvoljeno`);
        }
        else {
            let rezultat = a / b;
            console.log(rezultat);
        }

    }
    else {
        console.log(`pogresan unos`);
    }

}

zbirDrugiZadatak(5, 8, `+`);
zbirDrugiZadatak(4, 2, `*`);

// 3. ZADATAK

function neparan(n) {
    let rez = null;
    if (n % 2 != 0) {
        rez = `tacno`;
    }
    else {
        rez = `netacno`
    }
    return rez;
}

let treciZadatak = neparan(7);
console.log(treciZadatak);

// 4. ZADATAK

// a)

function maks2(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
let makss2 = maks2(6, 5);
console.log(makss2);

// b)

// MOZES I DA RECIKLIRAS maks2 !!!!!!

function maks4(a, b, c, d) {
    if (a >= b && a >= c && a >= d) {
        return a;
    }
    else if (b >= a && b >= c && b >= d) {
        return b;
    }
    else if (c >= a && c >= b && c >= d) {
        return c;
    }
    else if (d >= a && d >= b && d >= c) {
        return d;
    }
}

let makss4 = maks4(3, 10, 50, 50);
console.log(makss4);

// 5. ZADATAK

function slika(link) {
    document.body.innerHTML += `<img src="${link}"/>`;
}

slika(`https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/1200px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg`);

//6. ZADATAK

function bojiTekst(bojaTeksta, tekst) {
    document.body.innerHTML += `<p style="color: ${bojaTeksta};">${tekst}</p>`
}

bojiTekst(`red`, `Jedan crveni tekst...`);

// 7. ZADATAK

function sedmiDan(y) {
    if (y % 7 == 0) {
        console.log(`Nedelja`);
    }
    else if (y % 7 == 1) {
        console.log(`Ponedeljak`);
    }
    else if (y % 7 == 2) {
        console.log(`Utorak`);
    }
    else if (y % 7 == 3) {
        console.log(`Sreda`);
    }
    else if (y % 7 == 4) {
        console.log(`Cetvrtak`);
    }
    else if (y % 7 == 5) {
        console.log(`Petak`);
    }
    else if (y % 7 == 6) {
        console.log(`Subota`);
    }
}

let dan = sedmiDan(7);

// za mesec

function mjesec(y) {
    if (y % 12 == 0) {
        console.log(`Januar`);
    }
    else if (y % 12 == 1) {
        console.log(`Februar`);
    }
    else if (y % 12 == 2) {
        console.log(`Mart`);
    }
    else if (y % 12 == 3) {
        console.log(`April`);
    }
    else if (y % 12 == 4) {
        console.log(`Maj`);
    }
    else if (y % 12 == 5) {
        console.log(`Jun`);
    }
    else if (y % 12 == 6) {
        console.log(`Jul`);
    }
    else if (y % 12 == 7) {
        console.log(`Avgust`);
    }
    else if (y % 12 == 8) {
        console.log(`Septembar`);
    }
    else if (y % 12 == 9) {
        console.log(`Oktobar`);
    }
    else if (y % 12 == 10) {
        console.log(`Novembar`);
    }
    else if (y % 12 == 11) {
        console.log(`Decembar`);
    }
}

let mesec = mjesec(11);

// 8. ZADATAK

function deljivSaTri(n, m) {
    let br = 0;
    let ispisivanje = ``;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            br++;
            ispisivanje += ` ` + i;
        }
    }
    console.log(`Brojevi od ${n} do ${m} koji su deljivi sa 3 su ${ispisivanje} i ima ih ${br}`);
}

deljivSaTri(1, 30);


// 13. ZADATAK hint je 6 zadatak

// 14. ZADATAK

function menjaFont(tekstt) {
    for (i = 20; i <= 25; i++) {
        document.body.innerHTML += `<p style="font-size: ${i}px;">${tekstt}</p>`;
    }
}
menjaFont(`Sta zva??`);

// 15. ZADATAK


function mojaPlata(n, a, d) {
    let zarada = a;
    for (i = 1; i <= n; i++) {
        zarada += a + d;
    }
    return zarada;
}

let pare = mojaPlata(3, 10, 5);
console.log(pare);






