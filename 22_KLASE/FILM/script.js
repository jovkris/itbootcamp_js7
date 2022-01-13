import Film from "./film.js";

let f1 = new Film(`Neki film`, `Neki reziser`, 1992, [1, 5, 3, 7]);
let f2 = new Film(`jos jedan film`, `covek jedan`, 2008, [2, 5, 7, 3, 2]);
let f3 = new Film(`evo jos jedan`, `da da covek ga napravio`, 2021, [3, 3, 3, 3, 3, 6, 7, 8]);


f1.stampaj();
f2.stampaj();
f3.stampaj();

f1.naslov = `Probica`;
f1.stampaj();

f1.dodaj_ocenu(12);
console.log(f1.ocene);

f1.dodaj_ocenu(1);
console.log(f1.ocene);

// prikaz svih filmova u tabelici

let tabelica =
    `
<table border="1">
    <tr>
        <th>Naziv filma</th>
        <th>Reziser</th>
        <th>Godina izdanja</th>
        <th>Ocene</th>
    </tr>
`;

let filmovi = [f1, f2, f3];

filmovi.forEach(film => {
    tabelica +=
    `
    <tr>
        <td>${film.naslov}</td>
        <td>${film.reziser}</td>
        <td>${film.godina_izdanja}</td>
        <td>${film.ocene}</td>
    </tr>`
});

tabelica += `</table>`;
document.body.innerHTML = tabelica;
