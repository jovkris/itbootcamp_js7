class Auto {
    constructor(m, b, ik, bv = 5) {
        this.marka = m; // poziva se setter marka
        this.boja = b; // poziva se setter boja
        this.ima_krov = ik; // poziva se setter ima_krov
        this.broj_vrata = bv; // poziva se setter za broj_vrata
    }

    sviraj() {
        console.log(`bip bip!`);
    }

    vozi(x) {
        // let m = this._marka;
        console.log(`Auto ${this.marka} vozi ${x} km`);
        // poziva se getter marka
    }

    stampaj(){
        console.log(`Auto marke: ${this.marka}, boje: ${this.boja}, ima krov: ${this.ima_krov}`);
        // svuda su pozvani getteri
    }

    // setter i getter za polje _marka

    set marka(m) {
        let m1 = m.trim();
        if (m1.length > 0) {
            this._marka = m1;
        }
        else {
            this._marka = `Auto`;
        }
    }

    get marka() {
        return this._marka;
    }

    // setter i getter za polje boja

    set boja(b) {
        this._boja = b;
    }

    get boja() {
        return this._boja;
    }

    // setter i getter za polje _ima_krov

    set ima_krov(ik) {
        if (ik === true || ik === false) {
            this._ima_krov = ik;
        }
        else {
            this._ima_krov = false;
        }
    }

    get ima_krov() {
        return this._ima_krov;
    }

    // setter i getter za polje _broj_vrata

    set broj_vrata(bv) {
        if (bv > 0) {
            this._broj_vrata = bv;
        }
        else {
            this._broj_vrata = 1;
        }
    }

    get broj_vrata() {
        return this._broj_vrata;
    }
}

export default Auto;

// PRAKSA:
// jedino getteri i setteri pristupaju poljima a ostale metode, kao i objekti van klase zovu gettere i settere

// // Metoda koja postavlja vrednost polja _marka

// postavi_marku(m) {
//     let m1 = m.trim();
//     if (m1.length > 0) {
//         this._marka = m1;
//     }
//     else {
//         this._marka = `Auto`;
//     }
// }

// // Metoda koja cita vrednost polja

// dohvati_marku() {
//     return this._marka;
// }