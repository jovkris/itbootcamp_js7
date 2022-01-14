import Film from "./film.js";

let f1 = new Film(`Neki film`, `Neki reziser`, 1992, [7, 5, 3, 7]);
let f2 = new Film(`jos jedan film`, `covek jedan`, 2008, [2, 5, 7, 3, 2]);
let f3 = new Film(`evo jos jedan`, `da da covek ga napravio`, 2021, [3, 3, 3, 1, 3, 6, 7, 8]);


f1.stampaj();
f2.stampaj();
f3.stampaj();

f1.naslov = `Probica`;
f1.stampaj();

f1.dodaj_ocenu(12);
console.log(f1.ocene);

f1.dodaj_ocenu(1);
console.log(f1.ocene);

// prikaz svih filmova u tabelici

let tabelica =
    `
<table border="1">
    <tr>
        <th>Naziv filma</th>
        <th>Reziser</th>
        <th>Godina izdanja</th>
        <th>Ocene</th>
        <th>Prosecna</th>
    </tr>
`;

let filmovi = [f1, f2, f3];

filmovi.forEach(film => {
    tabelica +=
        `
    <tr>
        <td>${film.naslov}</td>
        <td>${film.reziser}</td>
        <td>${film.godina_izdanja}</td>
        <td>${film.ocene}</td>
        <td>${film.prosek()}</td>
        
    </tr>`
});

tabelica += `</table>`;
document.body.innerHTML = tabelica;

console.log(f1.prosek());

let vek_filmova = (niz, vek) => {
    let vek_poc = vek * 100 - 99;
    let vek_kraj = vek * 100;
    niz.forEach(film => {
        if (film.godina_izdanja >= vek_poc && film.godina_izdanja <= vek_kraj) {
            console.log(film);
        }
    });
}

vek_filmova(filmovi, 20);

let prosecna_ocena = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(film => {
        film.ocene.forEach(ocena => {
            suma += ocena;
            br++;
        });
    });
    let prosecna = suma / br;
    return prosecna;
}

console.log(prosecna_ocena(filmovi));

////////////////////////////////////
let najbolje_ocenjeni = niz => {
    let najbolji = niz[0];
    for (let i = 0; i < niz.lengt; i++) {
        if (najbolji.prosek() < niz[i].prosek()) {
            najbolji = niz[i];
        }
    }
    return najbolji;
}


console.log(najbolje_ocenjeni(filmovi));
//////////////////////////////////////////////////////

let osrednji_film = arr => {
    let globalni_prosek = prosecna_ocena(arr);
    let film_najblizi_proseku = arr[0]; // pretpostavka
    // let najmanja_razlika = Math.abs(globalni_prosek - film_najblizi_proseku.prosek());
    arr.forEach(film => {
        let prosek_filma = film.prosek();
        if (Math.abs(globalni_prosek - prosek_filma) < Math.abs(globalni_prosek - film_najblizi_proseku.prosek())) {
            // najmanja_razlika = Math.abs(globalni_prosek - prosek_filma);
            film_najblizi_proseku = film;
        }
    });
    return film_najblizi_proseku;
}

osrednji_film(filmovi).stampaj();


let najmanja_ocena_najboljeg = arr => {
    let najbolji = najbolje_ocenjeni(arr);
    let ocene_najboljleg = najbolji.ocene;
    let najslabija_ocena = ocene_najboljleg[0];
    for (let i = 1; i < ocene_najboljleg.length; i++) {
        if (najslabija_ocena > ocene_najboljleg[i]) {
            najslabija_ocena = ocene_najboljleg[i];
        }
    }
    console.log(najslabija_ocena);
};

najmanja_ocena_najboljeg(filmovi);

let najmanja_ocena = niz => {
    let najmanja_ocena = niz[0].ocene[0];
    niz.forEach(film => {
        film.ocene.forEach(ocena => {
            if (najmanja_ocena > ocena) {
                najmanja_ocena = ocena;
            }
        });
    });
    return najmanja_ocena;
};

console.log(najmanja_ocena(filmovi));

///////////////////

// concat spaja 2 niza u 1 // concat bi stavljao niz u niz, tako da mora da se udje u ocene da bi se koristio push (trebala bi jos jedna foreach petlja)

// tip je objekat kada radimo concat
// tip je array kada radimo push
let f = [];
let sve_ocene = niz => {
    niz.forEach(film => {
        f = f.concat(film.ocene);
    });
    return f;
};

console.log(sve_ocene(filmovi));

let najcesca_ocena = arr => {
    let pretpostavka_elem = arr[0];
    let pretpostavka_elem_pojavljivanja = 1;
    for (let i = 0; i < arr.length; i++) {
        let tekuci = arr[i];
        let tekuci_br = 0;
        for (let j = 0; j < arr.length; j++) {
            if (tekuci == arr[j]) {
                tekuci_br++;
            }
        }
        if (pretpostavka_elem_pojavljivanja < tekuci_br) {
            pretpostavka_elem_pojavljivanja = tekuci_br;
            pretpostavka_elem = tekuci;
        }
    }
    return pretpostavka_elem;
}
let sve = sve_ocene(filmovi);
console.log(najcesca_ocena(sve));

////////////////////////////////

let iznad_ocene = (niz, ocena) => {
    let niz_filmova = [];
    niz.forEach(film => {
        if (film.prosek() > ocena) {
            niz_filmova.push(film);
        }
    });
    return niz_filmova;
};

console.log(iznad_ocene(filmovi, 4));

/////////////////////////////////////

let iznad_ocene_noviji = (niz, ocena) => {
    let najnoviji_film_izdanje = niz[0].godina_izdanja;
    let najnoviji_iznad_ocena = niz[0];
    niz.forEach(film => {
        if (film.prosek() > ocena && film.godina_izdanja > najnoviji_film_izdanje) {
            najnoviji_iznad_ocena = film;
        }
    });
    return najnoviji_iznad_ocena;
};

console.log(iznad_ocene_noviji(filmovi, 5));