console.log("Pozdrav iz JS datoteke");


let a = 3, b = 6; // u jednoj liniji koda moze vise promenljivih da se uvede
console.log(a * b);
console.log("Pera" + "Stankovic");

b = b / a;
console.log(a, b); // a = 3, b = 2
a = b * a + a;
console.log(a, b); // a = 9, b = 2

b = (a - 2 * b) / b; // 2.5
console.log(a, b);


//a = a + 10; //9 + 10 = 19
a += 10 // skracen zapis reda 17
console.log(a); // a = 19

b /= a; // b = b / a

a = a + 1;
// console.log(a); // 19 + 1 = 20

// a += 1;
a++; // povecava broj za jedan
console.log(a);

++a;
console.log(a);

let c = 5;
console.log(c++); // provo se iskoristi stara vrednost promenljive u izrazu pa se onda vrednost promenljive poveca
console.log(c);

let d = 3;
console.log(++d); // prvo se vrednost promenljive poveca za jedan a onda se nova vrednost koristi u izrazu
console.log(d);

c = 4;
d = 3;
x = (c++) * (--d);
console.log(c, d, x); // c = 5 , d = 2 , x = 8

console.log(7 % 2); // 7 = 3 * 2 + 1, rezultat je 1
console.log(9 % 2); // rezultat je isto 1

console.log(180 % 60); //180 = 3 * 60 + 0 moguci rezultati su svi brojevi od 0 do jednog manje od broja s kojim se deli

console.log(365 % 7);

console.log(4 ** 3); // 4*4*4


//frikin vezbe zaboravila sam kako se linkuje js he he 


// prva vezba

let h = 14;
let m = 46;
console.log(h * 60 + m); //valjda XD


//druga vezba

m = 150;
r = 150 % 60;
console.log(m / 60, r);


// treca vezba

let t = 25;
let n = 200;
console.log(n - t);

// cetvrta vezba nema sanse


