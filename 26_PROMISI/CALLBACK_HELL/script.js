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

let get_todos = (resource, callback) => {
    let req = new XMLHttpRequest();

    req.addEventListener(`readystatechange`, () => {
        if (req.readyState === 4 && req.status === 200) {
            // sve ok
            // console.log(req.responseText);
            callback(req.responseText, undefined);
        }
        else if (req.readyState === 4) {
            // console.log(`nesto ne valja bate`);
            // nesto nije ok   
            callback(undefined, `Ne mogu da dohvatim podatke`);
        }
    });

    req.open(`GET`, resource);
    req.send();
};

get_todos(`../JSON/todos.json`, (data, err) => {
    console.log(`callback okinuta`);
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
        get_todos(`../JSON/fruits.json`, (data, err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
                get_todos(`../JSON/vegetables.json`, (data, err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(data);
                    }
                });
            }
        });
    }
});

console.log(`KRAJ`);

