console.log(`objekti boiii`);

let blog1 = {
    title: `hejho`,
    content: `ovo je blog o ne znam ni ja cemu`,
    author: `life itself`,
};

console.log(blog1);
console.log(typeof blog1);
console.log(blog1.title); // ispis propertija
console.log(blog1[`title`]); // drugi nacin ispisa propertija

blog1.title = `promenila sam naslov`; // promena vrednosti propertija
console.log(blog1.title);

blog1[`title`] = `je l sam ga opet promenila?`; // promena vrednosti propertija drugi nacin
console.log(blog1.title);

///////////////////////////////////////

let user = {
    username: `Gengsta`,
    age: 30,
    blogs: [`if naredba grananja`, `while petlja`, `for petlja`],
    login: function () {
        console.log(`ulogovani ste!`); // ubacivanje funkcionalnosti odn metod
    },
    logout: function () {
        console.log(`izlogovani ste`)
    },
    logBlogs: function () {
        console.log(this);
        console.log(this.blogs); // pristup propertiju koji je unutar objekta kroz funkcionalnost objekta... je l kapiras???
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

console.log(user); // u konzoli redja propertije po abecednom redu nemoj se zbunis

console.log(user.blogs);
let nasloviBlogova = user.blogs;
for (let i = 0; i < nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`;
};

for (let i = 0; i < user.blogs.length; i++) {
    document.body.innerHTML += `<h4>${user.blogs[i]}</h4>`;
};

// poziv metoda

user.login();
user.login();

user.logout();
user.logBlogs();

//this

console.log(this); // sve je objakat omg whaaaatttt

////////////////////////////////////////////////////

let dan = {
    Datum: `2021/12/23`,
    Kisa: false,
    Sunce: true,
    Oblacno: false,
    Temperature: [-8, -5, 0, 1],

    prosecnaTemperatura: function () {
        let sum = 0;
        let br = 0;
        for (let i = 0; i < this.Temperature.length; i++) {
            sum += this.Temperature[i];
            br++;
        }
        let prosecna = sum / br;
        return prosecna;
    },

    natprosecneTemperature: function () {
        let prosecna = this.prosecnaTemperatura(this.Temperature);
        let br = 0;
        let vecaOd = this.Temperature[0];
        for (let i = 1; i < this.Temperature.length; i++) {
            if (this.Temperature[i] > prosecna) {
                vecaOd = this.Temperature[i];
                br++;
            }
        }
        return br;

    },

    kolikoMerenjaSaMaxTemp: function () {
        let max = this.Temperature[0];
        let br = 0;
        for (let i = 1; i < this.Temperature.length; i++) {
            if (max < this.Temperature[i]) {
                max = this.Temperature[i];
            }

        }
        for (let i = 0; i < this.Temperature.length; i++) {
            if (max == this.Temperature[i]) {
                br++;
            }
        }
        return br;
    },

    what: function (n, m) { // OVAKO
        let br = 0;
        for (let i = 0; i < this.Temperature.length; i++) {
            if (this.Temperature[i] > n && this.Temperature[i] < m) {
                br++;
            }
        }
        return br;
    },

    what1: function () {
        return (this.natprosecneTemperature() > this.Temperature.length / 2) ? true : false;
    },

    leden: function () {
        let iznadNule = 0;
        this.Temperature.forEach(el => {
            if (el > 0) {
                iznadNule++;
            }
        });
        return (iznadNule > 0) ? true : false;

    },

    tropski: function () {
        let ispod24 = 0;
        this.Temperature.forEach(el => {
            if (el < 24) {
                ispod24++;
            }
        });
        return (ispod24 > 0) ? false : true;

    },

    nepovoljan: function () {
        let jednaTemp = this.Temperature[0];
        let br = 0;
        for (let i = 1; i < this.Temperature.length; i++) {
            if (jednaTemp - this.Temperature[i] > 8) {
                br++;
            }
            jednaTemp = this.Temperature[i];
        }
        return (br > 0) ? true : false;
    },

    neuobicajen: function () {
        let neuobicajenDan = false;
        this.Temperature.forEach(el => {
            if (this.Kisa == true && el < -5) {
                neuobicajenDan = true;
            }
            else if (this.Oblacno == true && el > 25) {
                neuobicajenDan = true;
            }
            else if (this.Kisa == true && this.Oblacno == true && this.Sunce == true) {
                neuobicajenDan = true;
            }
            else {
                neuobicajenDan = false;
            }
        });

        return neuobicajenDan;

    },



};

console.log(dan.prosecnaTemperatura()); // poziv proseka
console.log(dan.natprosecneTemperature()); // poziv broja natprosecnih temperatura
console.log(dan.kolikoMerenjaSaMaxTemp()); // poziv broja max temperatura7
console.log(dan.leden());
console.log(dan.tropski());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen());

console.log(dan.what(-1, 3)); //



////////////////////////////////////





