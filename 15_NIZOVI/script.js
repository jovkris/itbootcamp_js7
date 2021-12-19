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





