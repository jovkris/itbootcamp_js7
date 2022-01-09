console.log(`howdy`);

// 1. ZADATAK
let student1 = {
    ime: `Mika`,
    prezime: `Mikic`,
    godina_studija: 1,
    ocene: [9, 8, 7, 9],

    suma: function () {
        let suma = 0;
        this.ocene.forEach(grade => {
            suma += grade;
        });
        return suma;
    },

    ari_sred: function () {
        let arit_sred = this.suma() / this.ocene.length;
        return (this.ocene.length == 0) ? `nema ocene` : arit_sred;
    },
};
let student2 = {
    ime: `Pera`,
    prezime: `Peric`,
    godina_studija: 2,
    ocene: [10, 10, 10, 10, 10, 10, 10],

    suma: function () {
        let suma = 0;
        this.ocene.forEach(grade => {
            suma += grade;
        });
        return suma;
    },

    ari_sred: function () {
        let arit_sred = this.suma() / this.ocene.length;
        return (this.ocene.length == 0) ? `nema ocene` : arit_sred;
    },
};
let student3 = {
    ime: `Zika`,
    prezime: `Zikic`,
    godina_studija: 3,
    ocene: [5, 6, 9, 5],

    suma: function () {
        let suma = 0;
        this.ocene.forEach(grade => {
            suma += grade;
        });
        return suma;
    },

    ari_sred: function () {
        let arit_sred = this.suma() / this.ocene.length;
        return (this.ocene.length == 0) ? `nema ocene` : arit_sred;
    },
};
let student4 = {
    ime: `Mirko`,
    prezime: `Mirkovic`,
    godina_studija: 1,
    ocene: [10, 10, 10, 10],

    suma: function () {
        let suma = 0;
        this.ocene.forEach(grade => {
            suma += grade;
        });
        return suma;
    },

    ari_sred: function () {
        let arit_sred = this.suma() / this.ocene.length;
        return (this.ocene.length == 0) ? `nema ocene` : arit_sred;
    },
};

let studenti = [student1, student2, student3, student4];



let pocinje_na_slovo = (arr, letter) => {
    arr.forEach(stu => {
        if (stu.prezime.startsWith(letter)) {
            document.body.innerHTML += `<h3>${stu.ime} ${stu.prezime}</h3>`;
        }
    });
};

pocinje_na_slovo(studenti, `M`);

let sadrzi_string = (arr, str_ime, str_prezime) => {
    arr.forEach(stu => {
        if (stu.ime.includes(str_ime) && stu.prezime.includes(str_prezime)) {
            document.body.innerHTML += `<p>Studenti koji u imenu sadrze "${str_ime}" i u prezimenu sadrze "${str_prezime}" su:</p> <h3>${stu.ime} ${stu.prezime}</h3>`;
        }
    });
};

sadrzi_string(studenti, `ko`, `ic`);

let koja_godina = (arr, god) => {
    let br = 0;
    arr.forEach(stu => {
        if (stu.godina_studija == god) {
            br++;
        }
    });
    return br
};

console.log(koja_godina(studenti, 1));

let maksimalni_prosek = arr => {
    let max = arr[0].ari_sred();
    let student = arr[0].ime + ` ` + arr[0].prezime;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].ari_sred() > max) {
            max = arr[i].ari_sred();
            student = arr[i].ime + ` ` + arr[i].prezime;
        }
    }
    console.log(student);
};

maksimalni_prosek(studenti);

let prosecan_student = arr => {
    arr.forEach(stu => {
        let br = 0;
        stu.ocene.forEach(grade => {
            if (grade == 6 || grade == 10) {
                br++;
            }
        });
        if (br > 0) {
            console.log(`${stu.ime} ${stu.prezime} nije prosecan`);
        }
        else {
            console.log(`${stu.ime} ${stu.prezime} je prosecan`);
        }
    });
};

prosecan_student(studenti);

let ekstra_student = arr => {
    arr.forEach(stu => {
        let br10 = 0;
        let br9 = 0;
        for (let i = 0; i < stu.ocene.length; i++) {
            if (stu.ocene[i] != 9 && stu.ocene[i] != 10) {
                break;
            }
            else if (stu.ocene[i] == 9) {
                br9++;
            }
            else if (stu.ocene[i] == 10) {
                br10++;
            }
        }
        if (br10 != 0 && br10 >= 2 * br9) {
            console.log(`${stu.ime} ${stu.prezime} je EXTRA student!!!`);
        }
    });
};

ekstra_student(studenti);

let kida_student = arr => {
    arr.forEach(stu => {
        let br9 = 0;
        for (let i = 0; i < stu.ocene.length; i++) {
            if (stu.ocene[i] != 9 && stu.ocene[i] != 10) {
                break;
            }
            else if (stu.ocene[i] == 9) {
                br9++;
            }
        }
        if (br9 != 0 && br9 < stu.godina_studija) {
            console.log(`Student ${stu.ime} ${stu.prezime} KIDA!!!`);
        }
    });
};

kida_student(studenti);

let razbija_student = arr => {
    arr.forEach(stu => {
        let br10 = 0;
        for (let i = 0; i < stu.ocene.length; i++) {
            if (stu.ocene[i] != 10) {
                break;
            }
            else if (stu.ocene[i] == 10) {
                br10++;
            }
        }
        if (br10 >= 5 * (stu.godina_studija - 1) && stu.godina_studija != 1) {
            console.log(`Student ${stu.ime} ${stu.prezime} RAZBIJA!!!`);
        }
    });
};

razbija_student(studenti);

let aljkav_student = arr => {
    arr.forEach(stu => {
        let student = ``;
        for (let i = 0; i < stu.ocene.length; i++) {
            if (stu.ocene[i] > 7) {
                break;
            }
            else {
                student = `je aljkav.`
            }
        };
        if (student === `je aljkav.`) {
            console.log(`Student ${stu.ime} ${stu.prezime} ${student}`);
        }
    });
};

aljkav_student(studenti);

let bruka_student = arr => {
    arr.forEach(stu => {
        let student = ``;
        if (stu.godina_studija != 1 && stu.ocene.length < 3 * (stu.godina_studija - 1)) {
            stu.ocene.forEach(grade => {
                if (grade <= 7) {
                    student = `se bruka.`
                }
            });
        }
        if (student === `se bruka.`) {
            console.log(`Student ${stu.ime} ${stu.prezime} ${student}`);
        }
    });
};

bruka_student(studenti);

//////////////////////////////////////////////////////////////////////////

// 2. ZADATAK

// =================POLAZNICI=====================

let polaznik1 = {
    ime: `Vojislav`,
    prezime: `Sibinovic`,
    ocena: 100,
};

let polaznik2 = {
    ime: `Marjan`,
    prezime: `Mitic`,
    ocena: 100,
};

let polaznik3 = {
    ime: `Grozda`,
    prezime: `Grozdanovic`,
    ocena: 90,
};

let polaznik4 = {
    ime: `Boban`,
    prezime: `Jezdic`,
    ocena: 85,
};

let polaznik5 = {
    ime: `Marko`,
    prezime: `Micic`,
    ocena: 81,
};

let polaznik6 = {
    ime: `Dunja`,
    prezime: `Sagric`,
    ocena: 81,
};

let polaznik7 = {
    ime: `Nina`,
    prezime: `Markovic`,
    ocena: 100,
};

let polaznik8 = {
    ime: `Katarina`,
    prezime: `Lubic`,
    ocena: 90,
};

let polaznik9 = {
    ime: `Vojislav`,
    prezime: `Sibinovic`,
    ocena: 100,
};

let polaznik10 = {
    ime: `Vesna`,
    prezime: `Mitkovic`,
    ocena: 100,
};

let polaznik11 = {
    ime: `Nikola`,
    prezime: `Paunovic`,
    ocena: 100,
};

let polaznik12 = {
    ime: `Matija`,
    prezime: `Pesic`,
    ocena: 100,
};

//===========KURSEVI=================

let kurs1 = {
    naziv: `Razvoj veb stranica: JS`,
    grad: `Nis`,
    polaznici: [polaznik1, polaznik2, polaznik3],

    prosek: function () {
        let suma = 0;
        let br = 0;
        this.polaznici.forEach(polaznik => {
            br++;
            suma += polaznik.ocena;
        });
        return suma / br;
    },

    uspesan: function () {
        let br = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena > 65) {
                br++;
            }
        });
        return (br == this.polaznici.length) ? true : false;
    },

    vise_od_80: function () {
        let br = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena >= 80) {
                br++;
            }
        });
        return (br == this.polaznici.length) ? true : false;
    }
};

let kurs2 = {
    naziv: `Razvoj veb stranica: JS`,
    grad: `Nis`,
    polaznici: [polaznik4, polaznik5, polaznik6],

    prosek: function () {
        let suma = 0;
        let br = 0;
        this.polaznici.forEach(polaznik => {
            br++;
            suma += polaznik.ocena;
        });
        return suma / br;
    },

    uspesan: function () {
        let br = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena > 65) {
                br++;
            }
        });
        return (br == this.polaznici.length) ? true : false;
    },

    vise_od_80: function () {
        let br = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena >= 80) {
                br++;
            }
        });
        return (br == this.polaznici.length) ? true : false;
    }
};

let kurs3 = {
    naziv: `Razvoj veb stranica: JS`,
    grad: `Novi Sad`,
    polaznici: [polaznik7, polaznik8, polaznik9],

    prosek: function () {
        let suma = 0;
        let br = 0;
        this.polaznici.forEach(polaznik => {
            br++;
            suma += polaznik.ocena;
        });
        return suma / br;
    },

    uspesan: function () {
        let br = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena > 65) {
                br++;
            }
        });
        return (br == this.polaznici.length) ? true : false;
    },

    vise_od_80: function () {
        let br = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena >= 80) {
                br++;
            }
        });
        return (br == this.polaznici.length) ? true : false;
    }
};

let kurs4 = {
    naziv: `Osnove programiranja: Java`,
    grad: `Nis`,
    polaznici: [polaznik10, polaznik11, polaznik12, polaznik2],

    prosek: function () {
        let suma = 0;
        let br = 0;
        this.polaznici.forEach(polaznik => {
            br++;
            suma += polaznik.ocena;
        });
        return suma / br;
    },

    uspesan: function () {
        let br = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena > 65) {
                br++;
            }
        });
        return (br == this.polaznici.length) ? true : false;
    },

    vise_od_80: function () {
        let br = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena >= 80) {
                br++;
            }
        });
        return (br == this.polaznici.length) ? true : false;
    }
};

// ================MOJ NIZ===================

let kursevi = [kurs1, kurs2, kurs3, kurs4];


let grad_odrzavanja = (arr, grad) => {
    let br = 0;
    arr.forEach(kurs => {
        if (kurs.grad == grad) {
            br++;
        }
    });
    return br;
};

console.log(grad_odrzavanja(kursevi, `Nis`));

let naziv = (arr, naziv) => {
    br = 0;
    arr.forEach(kurs => {
        if (kurs.naziv == naziv) {
            br++;
        }
    });
    return br;
};

console.log(naziv(kursevi, `Osnove programiranja: Java`));

let max_polaznika = arr => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].polaznici.length > max.polaznici.length) {
            max = arr[i];
        }
    }
    console.log(`Kurs ${max.naziv} koji se odrzava u gradu ${max.grad} je kurs sa najvecim brojem polaznika.`);
};

max_polaznika(kursevi);

let isto_prezime = (arr, string) => {
    arr.forEach(kurs => {
        kurs.polaznici.forEach(polaznik => {
            if (polaznik.prezime == string) {
                console.log(`Polaznik/ca ${polaznik.ime} ${polaznik.prezime} koji/a pohadja kurs iz ${kurs.naziv} u gradu ${kurs.grad} ima prezime ${string}.`);
            }
        });
    });
};

isto_prezime(kursevi, `Micic`);

let najbolja_prosecna_ocena = arr => {
    let max = arr[0].prosek();
    let max_kurs = arr[0].naziv;
    let max_grad = arr[0].grad;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].prosek() > max) {
            max = arr[i].prosek();
            max_kurs = arr[i].naziv;
            max_grad = arr[i].grad;
        }
    }
    console.log(`${max_kurs} koji se odrzava u gradu ${max_grad} je kurs sa najvecom prosecnom ocenom od ${max} na zavrsnom testu.`);
};

najbolja_prosecna_ocena(kursevi);

let uspesan_kurs = arr => {
    let brkursa = 0;
    for (let i = 0; i < arr.length; i++) {
        let br = 0;
        arr[i].polaznici.forEach(polaznik => {
            if (polaznik.ocena > 65) {
                br++;
            }
        });
        if (br == arr[i].polaznici.length) {
            brkursa++;
        }
    }
    return brkursa;
};

console.log(uspesan_kurs(kursevi));

/* Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false). */

let grad_kida = (arr, grad) => {
    let uspesan_kurs = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].grad != grad && arr[i].uspesan() != true) {
            return false;
        }
        else if (arr[i].grad == grad && arr[i].uspesan() == true) {
            uspesan_kurs++;
        }
    };
    console.log(uspesan_kurs);
    if (uspesan_kurs > 0) {
        return true;
    }
};

console.log(grad_kida(kursevi, `Nis`));


/* Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false). */

let studenti_pokidali = (arr, naziv_kursa) => {
    let pokidali = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].naziv != naziv_kursa && arr[i].vise_od_80() != true) {
            return false;
        }
        else if (arr[i].naziv == naziv_kursa && arr[i].vise_od_80() == true) {
            pokidali++;
        }
    }
    if (pokidali > 0) {
        return true;
    }
};
console.log(studenti_pokidali(kursevi, `Razvoj veb stranica: JS`));