console.log("if - naredba grananja");

if(false) {
    console.log("Uslov je ispunjen");
}

console.log("neki kod...");

// Operatori poredjenja:  ==, !=, <, >, <=, >=

// == proverava samo jednakost po vrednosti

let a = 7;
let b = 7;
if(a == b) {
    console.log("a i b su jednake vrednosti.");
}

a = 4;
b = 4;
if(a != b) {
    console.log("a i b nisu jednake vrednosti");
}

if (a < b) {
    console.log("a je strogo manje od b");
}

if(a <= b) {
    console.log("a je manje ili jednako od b");
}

////////////////////////////

// === proverava jednakost i po vrednosti i po tipu

a = 5;
b = "5";
c = a + b;
console.log(c);

a = 5;
b = 5;
if(a === b) {
    console.log("A i b su jednaki po vrednosti i po tipu");
}

// !== da li je nesto razlicito i po tipu i po vrednosti

a = 7;
b = "7";
if(a !== b) {
    console.log("a i b nisu jednaki ili po tipu ili po vrednosti");
}

///////////////////////////////////

let x = 3;
let y = 2;
let z = 5;
if(x+y == z) {
    console.log("x+y je jednako sa z");
}






