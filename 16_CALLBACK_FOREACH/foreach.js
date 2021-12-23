let a = [1, 5, 7, 3, 8, 9];

// function ispis(elem) {
//     console.log(`Element niza je: ${elem}`);
// }

// a.forEach(ispis);

a.forEach(elem => {
    console.log(`element : ${elem}`);
});

[1, 3, 5, 6].forEach(elem => {
    console.log(`a sad ovako: ${elem}`);
});

// ODREDITI ZBIR ELEMENATA CELOBROJNOG NIZA

let b = [1, 56, 7, 2, 37, 6];

let zbir = n => {
    let suma = 0;
    n.forEach(el => {
        suma += el;
    });
    return suma;
};

console.log(zbir(b));

//////////////////////////////////

// 3. ZADATAK

// Odrediti proizvod elemenata celobrojnog niza.


let proizvod = n => {
    let p = 1;
    n.forEach(el => {
        p *= el;
    });
    return p;
}

console.log(proizvod([1, 6, 6, 2, 3]));

// 4. ZADATAK

// Odrediti srednju vrednost elemenata celobrojnog niza.

let srvr = (n, b) => {
    let s = b(n);
    let br = 0;
    n.forEach(el => {
        br++;
    });
    let srvr = s / br;
    return srvr;
}

console.log(srvr([1, 2, 4, 4, 5], zbir));

// 5. ZADATAK

// Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxvr = n => {
    let max = n[0];
    n.forEach(el => {
        if (el > max) {
            max = el;
        }
    });
    return max;
}

console.log(maxvr([1, 6, 34, 7, 8, 4, 3, 6]));

// 6. ZADATAK

// Odrediti minimalnu vrednost u celobrojnom nizu.

let minvr = n => {
    let min = n[0];
    n.forEach(el => {

        if (el < min) {
            min = el;
        }
    });
    return min;
}

console.log(minvr([1, 6, 34, 7, 8, 4, 3, 6]));


