console.log(`Mr bombastic`);

let to_do = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener(`readystatechange`, function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if (this.readyState === 4) {
            reject(`An error BRO!`);
        }
    });
    request.open(`GET`, `https://jsonplaceholder.typicode.com/todos`);
    request.send();
};

let odradjeni = arr => {
    let lista_odradjenih = [];
    arr.forEach(item => {
        if (item.completed) {
            lista_odradjenih.push(item);
        }
    });
    console.log(lista_odradjenih);
};

let ridzekt = poruka => {
    console.log(poruka);
};


to_do(odradjeni, ridzekt);

let juzeri_pa_postovi = resource => {
    let req = new XMLHttpRequest();
    req.open(`GET`, resource);
    req.send();

    return new Promise((resolve, reject) => {
        req.addEventListener(`readystatechange`, function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(this.responseText);
            }
            else if (this.readyState === 4) {
                reject(`ERROR BURAZERU!!!`);
            }
        });
    });
};

juzeri_pa_postovi(`https://jsonplaceholder.typicode.com/users`).then(data => {
    console.log(`promise juzeri`, data);
    return juzeri_pa_postovi(`https://jsonplaceholder.typicode.com/posts`);
}).then(data => {
    console.log(`promis posts`, data);
    return juzeri_pa_postovi(`https://jsonplaceholder.typicode.com/albums`).then(data => {
        console.log(`promis albums`, data);
        return juzeri_pa_postovi(`https://jsonplaceholder.typicode.com/todos`).then(data => {
            console.log(`promis todos`, data);
        });
    });
}).catch(err => {
    console.log(`promis rejected`, err);
});