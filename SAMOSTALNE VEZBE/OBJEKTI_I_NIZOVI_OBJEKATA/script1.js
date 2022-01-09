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