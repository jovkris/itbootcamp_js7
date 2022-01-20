let request = new XMLHttpRequest();
// request.addEventListener(`readystatechange`, () =>{
//     if (request.readyState == 1) {
//         console.log(`uspostavljena konekcija`);
//     }
//     else if (request.readyState == 2) {
//         console.log(`poslat je zahtev serveru`);
//     }
//     else if (request.readyState == 3) {
//         console.log(`prihvata se odgovor u statusu preuzimanja`);
//     }
//     else if (request.readyState == 4) {
//         console.log(`ogovor je preuzet: `, request.responseText);
//     }
// });
request.addEventListener(`readystatechange`, function () {
    if (this.readyState === 4 && this.status === 200) {
        // console.log(this.responseText);
        let data = JSON.parse(this.responseText); // pretvaramo informacije iz stringa u objekte ili niz objekata
        console.log(data);
    }
    else if (this.readyState === 4) {
        console.log(`could not fetch data`);
    }
});
request.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request.send(); // kreira novu nit u programu



////////////////////////////////////////////////////////////////////
// anonimna funkcija se razlikuje od arrow u kljucnoj reci this
// kod arrow funkcije, this UVEK VRACA DOCUMENT a ne objekat koji poziva metodu


//////////////////////////////////////////////////////////////////////



let req1 = new XMLHttpRequest();

req1.addEventListener(`readystatechange`, function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(`Ispisati u konzoli one korisnike čiji website ima domen „.com“.`);
        let data = JSON.parse(this.responseText);
        data.forEach(user => {
            if (user.website.includes(`.com`)) {
                console.log(user);
            }
        });
    }
    else if (this.readyState === 4) {
        console.log(`could not fetch data`);
    }


});
req1.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
req1.send();



let req2 = new XMLHttpRequest();

req2.addEventListener(`readystatechange`, function () {

    if (this.readyState === 4 && this.status === 200) {
        console.log(`Ispisati korisnike čije ime sadrži reč „Clementin“.`);
        let data = JSON.parse(this.responseText);
        data.forEach(user => {
            if (user.name.includes(`Clementin`)) {
                console.log(user);
            }
        });
    }
    else if (this.readyState === 4) {
        console.log(`could not fetch data`);
    }
});

req2.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
req2.send();

let req3 = new XMLHttpRequest();

req3.addEventListener(`readystatechange`, function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(`Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.`);
        let data = JSON.parse(this.responseText);
        data.forEach(user => {
            if (user.company.name.includes(`Group`) || user.company.name.includes(`LLC`)) {
                console.log(user);
            }
        });
    }
    else if (this.readyState === 4) {
        console.log(`could not fetch data`);
    }
});

req3.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
req3.send();

req4 = new XMLHttpRequest();

req4.addEventListener(`readystatechange`, function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(`Ispisati sve različite gradove u kojima rade ovi korisnici.`);
        let data = JSON.parse(this.responseText);
        let city = [];
        data.forEach(user => {
            if (!city.includes(user.address.city)) {
                city.push(user.address.city);
            }
        });
        console.log(city);
    }
    else if (this.readyState === 4) {
        console.log(`could not fetch data`);
    }
});
req4.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
req4.send();

let req5 = new XMLHttpRequest();

req5.addEventListener(`readystatechange`, function () {
    let br = 0;
    if (this.readyState === 4 && this.status === 200) {
        console.log(`Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.`);
        let data = JSON.parse(this.responseText);
        data.forEach(user => {
            if (parseFloat(user.address.geo.lat) < 0 && parseFloat(user.address.geo.lng) < 0) { // parseFloat() jer su realni brojevi. parseInt() menja u ceo broj!!!!
                br++;
            }
        });
        console.log(br);
    }
    else if (this.readyState === 4) {
        console.log(`could not fetch data`);
    }

});

req5.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
req5.send();




///////////////////////////////////////////////////////////////////////
//              pravimo callback da ne pisemo svaki put request i stavljamo u objekat....
/////////////////////////////////////////////////////////////////////

// 1. nacin, pravimo 2 callback funkcije (resolve, reject)


let get_users = (resolve, reject) => { // callback kao parametar
    let request = new XMLHttpRequest();
    request.addEventListener(`readystatechange`, function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            resolve(data); //evo je callback
        }
        else if (this.readyState === 4) {
            reject(`An error occured!`)
        }
    });
    request.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
    request.send();
};

let zad2 = arr => {
    arr.forEach(user => {
        if (user.website.includes(`.com`)) {
            console.log(user.name);
        }
    });
};

let zad3 = arr => {
    arr.forEach(user => {
        if (user.name.includes(`Clementin`)) {
            console.log(user);
        }
    });
};

let zad4 = arr => {
    arr.forEach(user => {
        if (user.company.name.includes(`Group`) || user.company.name.includes(`LLC`)) {
            console.log(user.name);
        }
    });
};

let zad5 = arr => {
    let cities = [];
    arr.forEach(user => {
        if (!cities.includes(user.address.city)) {
            cities.push(user.address.city);
        }
    })
    console.log(cities);
};

let ispis_poruke_stranica = (poruka) => {
    document.body.innerHTML += `<p class="error">${poruka}</p>`
};

let ispis_poruke_konzola = (poruka) => {
    console.log(poruka);
}

get_users(zad2, ispis_poruke_konzola);
get_users(zad3, ispis_poruke_konzola);
get_users(zad4, ispis_poruke_konzola);
get_users(zad5, ispis_poruke_konzola);


// let igraci = new XMLHttpRequest();

let igraci = (resolve, reject) => { // callback kao parametar
    let request = new XMLHttpRequest();
    request.addEventListener(`readystatechange`, function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            resolve(data); //evo je callback
        }
        else if (this.readyState === 4) {
            reject(`An error occured!`)
        }
    });
    request.open(`GET`, `./sportisti.json`);
    request.send();
};

let prosecna_visina = arr => {
    console.log(`ISPIS PROSECNIH VISINA IGRACA`);
    let visine = 0;
    let prosek = 0;
    arr.forEach(player => {
        visine += player.visina;
    });
    prosek = visine / arr.length;
    console.log(prosek);
};

let najmanje_transfera = arr => {
    console.log(`IGRAC SA NAJMANJE TRANSFERA`);
    let najmanje = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].timovi.length < najmanje.timovi.length) {
            najmanje = arr[i];
        }
    }
    console.log(najmanje.ime, najmanje.prezime);
};

let igrali_za_lakerse = arr => {
    console.log(`IGRACI KOJI SU IGRALI ZA LAKERSE`);
    let igrali = [];
    arr.forEach(player => {
        player.timovi.forEach(team => {
            if (team.includes(`Lakers`)) {
                igrali.push(player);
            }
        });
    });
    console.log(igrali);
};


igraci(prosecna_visina, ispis_poruke_konzola);
igraci(najmanje_transfera, ispis_poruke_konzola);
igraci(igrali_za_lakerse, ispis_poruke_konzola);




