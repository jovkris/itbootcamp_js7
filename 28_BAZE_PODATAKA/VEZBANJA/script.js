
// db je objekat BAZE (njega vudemo iz .html fajla)
console.log(db);

// pristupanje kolekciji 
let customers = db.collection(`customers`);
console.log(customers);

// pristupanje dokumentu
let doc1 = customers.doc(`01`);
console.log(doc1);

let doc2 = db.collection(`tasks`).doc(`clean`);
console.log(doc2);

/*
za pristup dokumentu:
db.collection(`...`).doc(`...`);

kod dokumenata imamo sledece operacije:
    CRUD (Create, Read, Update, Delete)
    Create : doc.set(...)
    Read   : doc.get(...)
    Update : doc.update(...)
    Delete : doc.delete(...)
sve ove operacije vracaju PROMISE
sto znaci: nakon njih lancamo .then() i .catch()

*/



let obj = {
    name: "Ljubica",
    age: 22,
    adresses: [`Nis`, `Leskovac`],
    salary: 470.00
};

db.collection(`customers`).doc(`03`).set(obj)
    .then(() => {
        console.log(`dodat novi dokument u kolekciju "customers"`);
    })
    .catch(error => {
        console.log(`greska prilikom dodavanja novog dokumenta: ${error}`);
    });

let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00");

let obj2 = {
    title: `Fudbal`,
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Go play football with sum friends!"
}

db.collection(`tasks`)
.doc(`play football`)
.set(obj2)
.then(() => {
    console.log(`uspesno dodat task`);
})
.catch(error => {
    console.log(`Neuspesno dodat task: ${error}`);
});


// UPDATE
db.collection(`tasks`)
.doc(`play football`)
.update({
    priority: true
}

)
.then(() => {
    console.log(`uspesno promenjeno polje u dokumentu`);
})
.catch(error => {
    console.log(`Greska prilikom menjanja dokumenta: ${error}`);
});

// DELETE

db.collection(`customers`)
.doc(`03`)
.delete()
.then(() => {
    console.log(`uspesno izbrisan dokument`);
})
.catch(error => {
    console.log(`Greska: ${error}`);
});


// Drugi nacin za dodavanje dokumenta

// kod add metode nema mogucnosti da se doda ID dokumenta

db.collection(`tasks`)
.add({
    title: "Vezba za projekat",
    description: "Vezbanje JS",
    start_date: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
    due_date: null,
    priority: true
})
.then(() =>{
    console.log(`uspesno dodat zadatak u kolekciju tasks`);
})
.catch(err =>{
    console.log(`neuspesno dodat zadatak ${err}`);
});

/* 
db.collection(`...`).add() je isto sto i db.collection(`.....`).doc().set()

dodaje novi dokument sa random generisanim ID-em

*/

