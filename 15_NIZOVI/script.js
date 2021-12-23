let cars = [`Toyota`, `BMW`, `Volvo`];
console.log(cars);

let numbers = [1, -7, 0, 5.5, -3.14];
console.log(numbers);

let random = [6, `stefan`, -8.8, true, [1, 3, 3,]];
console.log(random);

console.log(cars[0]); // pristupanje odredjenom elementu u nizu...

console.log(random[4][1]); // pristupanje elementu u nizu koji je i sam u nizu

// menjanje elemenata u nizu

cars[0] = `Peugeot`;
console.log(cars);

// prolazenje kroz sve elemente niza

for (let i = 0; i < cars.length; i++) { // bitno da je i strogo manje od cars.length
    console.log(cars[i]);
}



// 2. ZADATAK

let brNiz = [-1, -5, -13,
    16];
let suma = 0;
for (i = 0; i < brNiz.length; i++) {
    suma += brNiz[i];
}
console.log(suma);

// sa funkcijom

let sumaElemenata = n => {
    for (i = 0; i < brNiz.length; i++) {
        suma += brNiz[i];
    }
    return suma;
}

console.log(`Suma elemenata niza je ${sumaElemenata(brNiz)}`);

// 3. ZADATAK
let proizvod = 1;
for (i = 0; i < brNiz.length; i++) {
    proizvod *= brNiz[i];
}
console.log(proizvod);

// 4. ZADATAK


let br = 0;
suma = 0;
for (i = 0; i < brNiz.length; i++) {
    suma += brNiz[i];
    br++;
}
let aritSred = suma / br;
console.log(br);
console.log(suma);
console.log(aritSred);

// 5. ZADATAK

let maxVredost = n => {
    let max = niz[0];
    for (let i = 1; i < n.length; i++) {
        if (max < n[i]) {
            max = n[i];
        }
    }
    return max;
}


// 6. ZADATAK

let minVredost = n => {
    let min = niz[0];
    for (let i = 1; i < n.length; i++) {
        if (min < n[i]) {
            min = n[i];
        }
    }
    return min;
}


// 7. ZADATAK


let maxIn = n => {
    let max = n[0];
    let maxIndex = 0;
    for (let i = 1; i < n.length; i++) {
        if (max < n[i]) {
            max = n[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

console.log(maxIn([1, 100, 40, -7, 500]));

// 8. ZADATAK

let minIn = n => {
    let min = n[0];
    let minIndex = 0;
    for (let i = 1; i < n.length; i++) {
        if (min > n[i]) {
            min = n[i];
            minIndex = i;
        }
    }
    return minIndex;
}

console.log(minIn([-1000, 500, 250, -6, -600,]));


// 9. ZADATAK


/* Odrediti broj maksimalnih vrednosti niza*/

let brojMax = n => {
    let maxi = n[0];
    let brojac = 0;
    for (let i = 1; i < n.length; i++) {
        if (n[i] > maxi) {
            maxi = n[i];
        }
    }
    for (i = 0; i < n.length; i++) {
        if (n[i] == maxi) {
            brojac++;
        }
    }
    return brojac;

}

console.log(brojMax([1, 2, 3, 4, 5, 6, 6, 6, 6]));



// 16. ZADATAK 


let lista = n => {
    let list = `<ul> Lista namirnica:`;
    for (let i = 0; i < n.length; i++) {
        list += `<li>${n[i]}</li>`;
    }
    list += `</ul>`;
    // document.body.innerHTML += list;
    return list;
}
document.getElementById(`d1`).innerHTML += lista([`spahgetti`, `tomatos`, `bbq sauce`, `salami`, `tp`]);

// lista([`spahgetti`, `tomatos`, `bbq sauce`, `salami`, `tp`]);

// 17. ZADATAK

let tabela = n => {
    let tabel = `<table style="border: 1px solid black;"><tr><th>Timovi</th></tr>`;
    for (let i = 0; i < n.length; i++) {
        tabel += `<tr><td style="border: 1px solid black;">${n[i]}</td></tr>`;
    }
    tabel += `</table>`;
    return tabel;
}

// tabela([`lakers`, `heats`, `kings`, `clippers`]);
document.getElementById(`d2`).innerHTML += tabela([`lakers`, `heats`, `kings`, `clippers`]);

// 18. ZADATAK

let slike = n => {
    let slike = ``;
    for (i = 0; i < n.length; i++) {
        slike += `<img src="${n[i]}"/>`
    }
    return slike;
}

document.getElementById(`d3`).innerHTML += slike([`https://www.birdnote.org/sites/default/files/Daffy_Duck-2-warner-bros-625.jpg`, `https://m.media-amazon.com/images/I/61tWEBN29oL._AC_SX679_.jpg`, `https://iheartcraftythings.com/wp-content/uploads/2021/09/6-56.jpg`]);

// slike([`https://www.birdnote.org/sites/default/files/Daffy_Duck-2-warner-bros-625.jpg`, `https://m.media-amazon.com/images/I/61tWEBN29oL._AC_SX679_.jpg`, `https://iheartcraftythings.com/wp-content/uploads/2021/09/6-56.jpg`]);



// 19. ZADATAK

// Ispisati dužinu svakog elementa u nizu stringova. 

let duzinaElementa = n => {
    for (let i = 0; i < n.length; i++) {
        console.log(n[i].length);
    }
}

duzinaElementa([`ne znam`, `mozda`, `recimo`]);


// 20 ZADATAK

let elementSaNajvecomDuzinom = n => {
    let najduziElement = n[0];
    for (let i = 1; i < n.length; i++) {
        if (najduziElement < n[i].length) {
            najduziElement = n[i];
        }
    }
    return najduziElement.length;
}

console.log(elementSaNajvecomDuzinom([`ne znam`, `mozda`, `recimo`]));

// 21. ZADATAK 

let veciOdProsecneDuzine = n => {
    let suma = 0;
    let br = 0;
    let brVeci = 0;

    for (let i = 0; i < n.length; i++) {
        suma += n[i].length;
        br++;
    }
    let prosecnaDuzina = suma / br;
    for (let i = 0; i < n.length; i++) {
        if (n[i].length > prosecnaDuzina) {
            brVeci++;
        }
    }
    console.log(prosecnaDuzina);
    return brVeci;
}

console.log(veciOdProsecneDuzine([`koja`, `je`, `prosecna`, `duzina`, `ovih`, `stringova`]));



// 22. ZADATAK

let sadrzea = n => {
    let br = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i].includes(`a`)) {
            br++;
        }
    }
    return br;
}

console.log(sadrzea([`mozda`, `ne`, `volela bih`]));

// 23. ZADATAK

let daLiSadrziAilia = n => {
    let br = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i].startsWith(`a`) || n[i].startsWith(`A`)) {
            br++;
        }
    }
    return br;
}
console.log(daLiSadrziAilia([`mozdA`, `Aj da vidimo`, `ne`, `moguce, a?`, `ako`]));

// 24. ZADATAK


let noviNiz = (a, b) => {
    let c = [];
    let indexA = 0;
    let indexB = 0;
    for (let i = 0; i < b.length * 2; i++) {
        if (i % 2 == 0) {
            c[i] = a[indexA];
            indexA++;
        }
        else {
            c[i] = b[indexB];
            indexB++;
        }
    }
    return c;
}

let a = [1, 2, 3];
let b = [4, 5, 6];

console.log(noviNiz(a, b));

// 25. ZADATAK;


a = [1, 2, 3, 4, 5, 6];
b = [9, 8, 7, 6, 5, 5];

let noviNiz1 = (a, b) => {
    // let indexAB = 0;
    let c = [];
    for (let i = 0; i < b.length; i++) {
        if (i % 2 == 0) {
            c[i] = a[i] * b[i];
        }
        else {
            c[i] = a[i] * b[i];
        }

    }
    return c;

}

console.log(noviNiz1(a, b));


// 26. ZADATAK

let zadatak26 = n => {
    let b = [];
    for (i = 0; i < n.length / 2; i++) {
        b[i] = (n[i] + n.length - i) / 2;
    }
    return b;
}
console.log(zadatak26([1, 2, 3, 4, 5, 6]));
