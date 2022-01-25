// // 1. KREIRANJE XML OBJEKTA
// let req = new XMLHttpRequest();

// req.addEventListener(`readystatechange`, ()=>{
//     if (req.readyState === 4 && req.status === 200) {
//         // sve ok
//         console.log(req.responseText);
//     }
//     else if (req.readyState === 4) {
//         console.log(`nesto ne valja bate`);
//         // nesto nije ok   
//     }
// });

// req.open(`GET`, `../JSON/todos.json`);
// req.send();

///////////////////////////////////////////////////////////

let get_todos = resource => {
    let req = new XMLHttpRequest();

    req.open(`GET`, resource);
    req.send();

    // vracamo promise (objekat)

    return new Promise((resolve, reject) => {
        req.addEventListener(`readystatechange`, () => {
            if (req.readyState === 4 && req.status === 200) {
                // sve ok
                // console.log(req.responseText);
                // callback(req.responseText, undefined);
                resolve(req.responseText);
            }
            else if (req.readyState === 4) {
                // console.log(`nesto ne valja bate`);
                // nesto nije ok   
                // callback(undefined, `Ne mogu da dohvatim podatke`);
                reject(`Ne mogu da dohvatim podatke`);
            }
        });
    });
    // return p;  // nemoj ovako.....
};

// zalimo da se prvo ucita todos.json
// pa fruits.json
// pa vegetables.json

get_todos(`../JSON/todos.json`).then(data => {
    console.log(`promise todos resolved`, data);
    return get_todos(`../JSON/fruits.json`); // vraca se promise
}).then(data =>{
    console.log(`promise fruits resolved`, data);
    return get_todos(`../JSON/vegetables.json`);
}).then(data =>{
    console.log(`promise vegetables resolved`, data);
}).catch(err => {
    console.log(`promise rejected`, err);
});



console.log(`KRAJ`);

