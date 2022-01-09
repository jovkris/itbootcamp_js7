console.log(`bamboleo`);

// 1. ZADATAK

//                  STUDENTI

let student1 = {
    ime: `Zdravko`,
    prezime: `Zdravkovic`,
    godina: 4,
    ocene: [8, 6, 9, 10, 7, 8, 8],

    prosek: function () {
        let suma = 0;
        this.ocene.forEach(ocena => {
            suma += ocena;
        });
        return (this.ocene.length > 0) ? suma / this.ocene.length : `Student nema ocene.`;
    },
};

let student2 = {
    ime: `Darko`,
    prezime: `Darkovic`,
    godina: 2,
    ocene: [6, 5],

    prosek: function () {
        let suma = 0;
        this.ocene.forEach(ocena => {
            suma += ocena;
        });
        return (this.ocene.length > 0) ? suma / this.ocene.length : `Student nema ocene.`;
    },
};
let student3 = {
    ime: `Mirko`,
    prezime: `Mirkovic`,
    godina: 3,
    ocene: [9, 9, 9, 9, 9, 9, 9, 10],

    prosek: function () {
        let suma = 0;
        this.ocene.forEach(ocena => {
            suma += ocena;
        });
        return (this.ocene.length > 0) ? suma / this.ocene.length : `Student nema ocene.`;
    },
};
let student4 = {
    ime: `Ratko`,
    prezime: `Ratkovic`,
    godina: 2,
    ocene: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],

    prosek: function () {
        let suma = 0;
        this.ocene.forEach(ocena => {
            suma += ocena;
        });
        return (this.ocene.length > 0) ? suma / this.ocene.length : `Student nema ocene.`;
    },
};

let studenti = [student1, student2, student3, student4];

//  Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.

document.body.innerHTML += `<h4>ovo je prvi zadatak</h4>`

let prezime_studenta = (arr, slovo) => {
    arr.forEach(student => {
        if (student.prezime[0] == slovo) {
            document.body.innerHTML += `<p>${student.ime} ${student.prezime}</p>`;
        }
    });
};

prezime_studenta(studenti, `R`);

// Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.

document.body.innerHTML += `<h4>ovo je drugi zadatak</h4>`

let ime_i_prezime = (arr, ime_str, prezime_str) => {
    arr.forEach(student => {
        if (student.ime.includes(ime_str) == true) {
            if (student.prezime.includes(prezime_str) == true) {
                document.body.innerHTML += `<p>${student.ime} ${student.prezime}</p>`;
            }
        }
    });
};

ime_i_prezime(studenti, `ko`, `vic`);

// Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.

let na_godini = (arr, god) => {
    let br = 0;
    arr.forEach(student => {
        if (student.godina == god) {
            br++;
        }
    });
    return br;
};

console.log(`Treci zadatak`);
console.log(na_godini(studenti, 3));

// Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.

console.log(`Cetvrti zadatak`);

let max_prosek = arr => {
    let max_prosek = arr[0].prosek();
    let student_max = arr[0].ime + ` ` + arr[0].prezime;
    for (let i = 1; i < arr.length; i++) {
        if (max_prosek < arr[i].prosek()) {
            max_prosek = arr[i].prosek();
            student_max = `Student ${arr[i].ime} ${arr[i].prezime} je jedan od studenata sa maksimalnim prosekom.`;
        }
    }
    console.log(student_max);
};

max_prosek(studenti);

// Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

console.log(`Peti zadatak`);

let prosecan = arr => {
    arr.forEach(student => {
        let br = 0;
        student.ocene.forEach(ocena => {
            if (ocena > 6 && ocena < 10) {
                br++;
            }
        });
        if (br == student.ocene.length) {
            console.log(`${student.ime} ${student.prezime} je prosecan student.`);
        }
    });
};

prosecan(studenti);

// Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.

console.log(`Sesti zadatak.`);

let ekstra = arr => {
    arr.forEach(student => {
        let br9 = 0;
        let br10 = 0;
        student.ocene.forEach(ocena => {
            if (ocena == 10) {
                br10++;
            }
            else if (ocena == 9) {
                br9++;
            }
        });
        if (br10 >= 2 * br9 && br10 + br9 == student.ocene.length) {
            console.log(`${student.ime} ${student.prezime} je ekstra student.`);
        }
    });
};

ekstra(studenti);

// Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.

console.log(`Sedmi zadatak.`);

let kida = arr => {
    arr.forEach(student => {
        let br9 = 0;
        let br10 = 0;
        student.ocene.forEach(ocena => {
            if (ocena == 9) {
                br9++;
            }
            else if (ocena == 10) {
                br10++;
            }
        });
        if (br9 < student.godina && br9 + br10 == student.ocene.length) {
            console.log(`${student.ime} ${student.prezime} kida.`);
        }
    });
};

kida(studenti);

// Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.

console.log(`Osmi zadatak`);

let razbija = arr => {
    arr.forEach(student => {
        let br10 = 0;
        student.ocene.forEach(ocena => {
            if (ocena == 10) {
                br10++;
            }
        });
        if (br10 == student.ocene.length && br10 >= 5 * (student.godina - 1)) {
            console.log(`Student ${student.ime} ${student.prezime} razbija`);
        }
    });
};

razbija(studenti);

// Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.

console.log(`Deveti zadatak`);

let aljkav = arr => {
    let br = 0;
    let aljkavi_studenti = ``;
    arr.forEach(student => {
        let aljkav = true;
        student.ocene.forEach(ocena => {
            if (ocena > 7) {
                aljkav = false;
            }
        });
        if (aljkav == true) {
            br++;
            aljkavi_studenti += `${student.ime} ${student.prezime}`;
        }
    });
    console.log(`Ima ${br} aljkavih studenata i to su: ${aljkavi_studenti}`);
};

aljkav(studenti);

// Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.

console.log(`Deseti zadatak`);

let bruka = arr => {
    let br_brukaju_se = 0;
    let brukaju_se = ``;
    arr.forEach(student => {
        let br = 0;
        if (student.ocene.length < 3 * (student.godina - 1) && student.godina != 1) {
            student.ocene.forEach(ocena => {
                if (ocena > 7) {
                    br++;
                }
            });
            if (br == 0) {
                br_brukaju_se++;
                brukaju_se += `${student.ime} ${student.prezime} `;
            }
        }
    });
    console.log(`Bruka se ${br_brukaju_se} studenta i to: ${brukaju_se}`);
};

bruka(studenti);

//                          DRUGI ZADATAK

console.log(`DRUGI ZADATAK`);

//----------------POLAZNICI------------------

let polaznik1 = {
    ime: `Veljko`,
    prezime: `Veljkovic`,
    ocena: 90,
};

let polaznik2 = {
    ime: `Marija`,
    prezime: `Marjanovic`,
    ocena: 90,
};

let polaznik3 = {
    ime: `Nikola`,
    prezime: `Nikolic`,
    ocena: 90,
};

let polaznik4 = {
    ime: `Milica`,
    prezime: `Micic`,
    ocena: 90,
};

let polaznik5 = {
    ime: `Kristina`,
    prezime: `Kristinovic`,
    ocena: 90,
};

let polaznik6 = {
    ime: `Marko`,
    prezime: `Markovic`,
    ocena: 90,
};

let polaznik7 = {
    ime: `Danilo`,
    prezime: `Danilovic`,
    ocena: 90,
};

let polaznik8 = {
    ime: `Stefana`,
    prezime: `Stefanovic`,
    ocena: 90,
};

let polaznik9 = {
    ime: `Dusan`,
    prezime: `Dusanovic`,
    ocena: 90,
};

let polaznik10 = {
    ime: `Jelena`,
    prezime: `Jelenkovic`,
    ocena: 90,
};

let polaznik11 = {
    ime: `Stanko`,
    prezime: `Stankovic`,
    ocena: 90,
};

let polaznik12 = {
    ime: `Marjan`,
    prezime: `Marjanovic`,
    ocena: 90,
};

//-----------------KURSEVI----------------------

let kurs1 = {
    naziv: `Razvoj veb stranica: JS`,
    grad: `Beograd`,
    polaznici: [polaznik1, polaznik2, polaznik3],
};

let kurs2 = {
    naziv: `Razvoj veb stranica: PHP`,
    grad: `Nis`,
    polaznici: [polaznik4, polaznik5, polaznik6],
};

let kurs3 = {
    naziv: `Testiranje softvera: QA`,
    grad: `Novi Sad`,
    polaznici: [polaznik7, polaznik8, polaznik9],
};

let kurs4 = {
    naziv: `Osnove programiranja: Java`,
    grad: `Kosovska Mitrovica`,
    polaznici: [polaznik10, polaznik11, polaznik12],
};

let kursevi = [kurs1, kurs2, kurs3, kurs4];


