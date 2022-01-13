class Film {
    constructor(n, r, g, o) {
        this.naslov = n;
        this.reziser = r;
        this.godina_izdanja = g;
        this.ocene = o;
    }

    set naslov(n) {
        let n1 = n.trim();
        if (n1.length > 0) {
            this._naslov = n1;
        }
        else {
            this._naslov = `Naslov filma`;
        }
    }

    get naslov() {
        return this._naslov;
    }

    set reziser(r) {
        let r1 = r.trim();
        if (r1.length > 0) {
            this._reziser = r1;
        }
        else {
            this._reziser = `Reziser`;
        }
    }

    get reziser() {
        return this._reziser;
    }

    set godina_izdanja(g) {
        if (g < 1800) {
            this._godina_izdanja = 1800;
        }
        else {
            this._godina_izdanja = g;
        }
    }

    get godina_izdanja() {
        return this._godina_izdanja;
    }

    set ocene(o) {
        this._ocene = o;
    }

    get ocene() {
        return this._ocene;
    }

    // dodavanje jedne ocene

    dodaj_ocenu(nova_ocena) {
        this._ocene.push(nova_ocena); // PUSH MORA PREKO POLJA A NE SETTERA
    }

    stampaj() {
        console.log(this);
    }
}

export default Film;