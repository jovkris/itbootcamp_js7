// function ispisKonzola(niz) {
//     let res = ``;
//     for (let i = 0; i < niz.length; i++) {
//         res += niz[i] + ` `;
//     }
//     console.log(res);
// }

// function ispisHTML(niz) {
//     let res = ``;
//     for (let i = 0; i < niz.length; i++) {
//         res += niz[i] + ` `;
//     }
//     document.body.innerHTML += `<div>${res}</div>`;
// }

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisHTML(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
}

function ispisNiza(niz, cb) {
    let res = ``;
    for (let i = 0; i < niz.length; i++) {
        res += niz[i] + ` `;
    }
    cb(res);
}

let brojevi = [1, 3, 5, 7, 8];
// ispisKonzola(brojevi);
// ispisHTML(brojevi);

ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi, ispisHTML);

// ISTI ZADATAK SAMO SE POZIVAJU ANONIMNE FUNKCIJE


ispisNiza(brojevi, function (poruka) {
    console.log(poruka);
});

ispisNiza(brojevi, function (poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
});


// ISTI ZADATAK SAMO SE POZIVAJU ARROW FUNKCIJE

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka => {
    document.body.innerHTML += `<div>${poruka}</div>`;
});


// Odredite br maximalnih elemenata u celobrojnom nizu i broj minimalnih elemenata u celobrojnom nizu

function maxel(n) {
    let max = n[0];
    for (let i = 1; i < n.length; i++) {
        if (n[i] > max) {
            max = n[i];
        }
    }
    return max;
}

function minel(n) {
    let min = n[0];
    for (let i = 1; i < n.length; i++) {
        if (n[i] < min) {
            min = n[i];
        }
    }
    return min;
}

function brojSvojstvoNiz(n, cb) {
    let s = cb(n);
    let broj = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] == s) {
            broj++;
        }
    }
    return broj;
}


console.log(brojSvojstvoNiz([1, 32, 6, 32, 6, 7], maxel));
console.log(brojSvojstvoNiz([1, 32, 6, 32, 6, 1], minel));




