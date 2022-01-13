export class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }

    set visina(v) {
        if (v > 0 && v < 250) {
            this._visina = v;
        }
        else {
            this._visina = 175;
        }

    }

    get visina() {
        return this._visina;
    }

    set tezina(t) {
        if (t > 0 && t < 250) {
            this._tezina = t;
        }
        else {
            this._tezina = 80;
        }

    }

    get tezina() {
        return this._tezina;
    }

    stampaj() {
        console.log(`Pacijent ${this.ime}, je visok ${this.visina} i tezak ${this.tezina}.`);
    }

    stampaj_listu(){
        let html_lista = 
        `<ul>
        <li>Ime: ${this.ime}</li>
        <li>Visina: ${this.visina}</li>
        <li>Tezina: ${this.tezina}</li>
        </ul>`;
        return html_lista;
    }

    bmi() {
        let tez = this.tezina;
        let vis = this.visina / 100;
        let bmi = tez / (vis ** 2);
        return bmi;
    }

    kritican() {
        let pac = this.bmi();
        return (pac < 15 || pac > 40) ? true : false;
    }

}