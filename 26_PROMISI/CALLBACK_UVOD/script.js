// PRIMERI CALLBACK FUNKCIJA

let myFunction = callback => { // ovde je callback parametar i nema zagrade i zove se kako god
    callback(); // ovde se poziva callback sa zagradama
};

myFunction(() => {
    console.log(`Callback okinuta`); // ovde se poziva myFunction 
});


/////////////////////////////////////

let sum = callback => {
    callback(5, 7);
    let br1 = 6;
    let br2 = 4;
    callback(br1, br2);
};

sum((x, y) => {
    console.log(x + y);
});

////////////////////////////////////////////////////
// moze i imenovana funkcija

function printSum(a, b) {
    console.log(a + b);
};

sum(printSum);

///////////////////////////////////////////////////////

let racunaj = (str, cb) => {
    console.log(str);
    cb(7, 5);
};

racunaj(`Oduzimanje`, (x, y) => {
    console.log(x - y);
});

racunaj(`Mnozenje`, (x, y) => {
    console.log(x * y);
});

/////////////////////////////////

let racunaj2 = (str, cb) => {
    console.log(str, cb(11, 15));
};

racunaj2(`deljenje`, (x, y) => {
    return x / y;
});

/////////////////////////////////////////

//    OVO JE REUSABILNIJE 

let racunaj3 = (str, a, b, cb) => {
    console.log(str, cb(a, b));
};

racunaj3(`deljenje`, 15, 17, (x, y) => {
    return x/ y;
});
//////////////////////////////////////////////