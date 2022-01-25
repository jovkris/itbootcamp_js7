let div_order = document.querySelector(`#order`);
let form_order = document.querySelector(`#order form`);
let input_order = document.querySelector(`#capacity`);

// function get_item(resource, resolve, reject) {
//     let req = new XMLHttpRequest();
//     req.addEventListener(`readystatechange`, function () {
//         if (this.readyState === 4 && this.status === 200) {
//             //superiska
//             let data = JSON.parse(this.responseText);
//             resolve(data);
//         }
//         else if (this.readyState === 4) {
//             //error
//             reject(`bla bla greska`);
//         }
//     });
//     req.open(`GET`, resource);
//     req.send();
// };

// function submit_form1(event) {
//     event.preventDefault();
//     let capacity = input_order.value;
//     let ids = [];
//     get_item(`./JSON/stock.json`, data => {
//         data.forEach(item => {
//             if (item.stock == 0) {
//                 ids.push(item.id);
//             }
//         });
//         get_item(`./JSON/weights.json`, data => {
//             let total_weight = 0;
//             data.forEach(item => {
//                 if (ids.includes(item.id)) {
//                     total_weight += item.weight;
//                 }
//             });
//             console.log(`Ukupna tezina proizvoda koji treba da se naruce je ${total_weight}`);
//             if (total_weight > capacity) {
//                 let par = document.createElement(`p`);
//                 par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona!`;
//                 par.style.color = `red`;
//                 par.style.fontSize = `24px`;
//                 par.style.fontWeight = `bold`;
//                 div_order.appendChild(par);
//             }
//             else {
//                 get_item(`./JSON/prices.json`, data => {
//                     let total_prices = 0;
//                     data.forEach(item => {
//                         if (ids.includes(item.id)) {
//                             total_prices = + item.price;
//                         }
//                     });
//                     let par = document.createElement(`p`);
//                     par.innerHTML = `Ukupna cena porudzbine je ${total_prices} RSD`;
//                     par.style.color = `green`;
//                     par.style.fontSize = `24px`;
//                     par.style.fontWeight = `bold`;
//                     div_order.appendChild(par);
//                 }, (msg) => { console.log(msg); });
//             }

//         }, (msg) => { console.log(msg); });
//     }, (msg) => { console.log(msg); });
// };

function get_item_return_promise(resource) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.addEventListener(`readystatechange`, function () {
            if (req.readyState === 4 && req.status === 200) {
                //superiska
                let data = JSON.parse(req.responseText);
                resolve(data);
            }
            else if (req.readyState === 4) {
                //error
                reject(`bla bla greska`);
            }
        });
        req.open(`GET`, resource);
        req.send();
    });
};

function submit_form2(event) {
    event.preventDefault();
    let capacity = input_order.value;
    let ids = [];
    get_item_return_promise(`./JSON/stock.json`)
        .then(data => {
            data.forEach(item => {
                if (item.stock <= 0) {
                    ids.push(item.id);
                }
            });
            return get_item_return_promise(`./JSON/weights.json`);
        })
        .then(data => {
            let total_weight = 0;
            data.forEach(item => {
                if (ids.includes(item.id)) {
                    total_weight += item.weight;
                }
            });
            console.log(`Ukupna tezina proizvoda koji treba da se naruce je ${total_weight}`);
            if (total_weight > capacity) {
                let par = document.createElement(`p`);
                par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona!`;
                par.style.color = `red`;
                par.style.fontSize = `24px`;
                par.style.fontWeight = `bold`;
                div_order.appendChild(par);
            }
            else {
                return get_item_return_promise(`./JSON/prices.json`);
            }
        })
        .then(data => {
            if (data != undefined) {
                let total_prices = 0;
                let table = document.createElement(`table`);
                let tr_h = document.createElement(`tr`);
                let th_naziv = document.createElement(`th`);
                th_naziv.innerText = `Naziv artikla`;
                let th_cena = document.createElement(`th`);
                th_cena.innerText = `Cena`;
                tr_h.appendChild(th_naziv);
                tr_h.appendChild(th_cena);
                table.appendChild(tr_h);
                div_order.appendChild(table);

                data.forEach(item => {
                    if (ids.includes(item.id)) {
                        total_prices += item.price;

                        let tr = document.createElement(`tr`);
                        let td_naziv = document.createElement(`td`);
                        td_naziv.innerText = `${item.item}`;
                        tr.appendChild(td_naziv);
                        let td_cena = document.createElement(`td`);
                        td_cena.innerText = `${item.price}`;
                        tr.appendChild(td_cena);
                        table.appendChild(tr);
                    }
                });
                let tr_ukupno = document.createElement(`tr`);
                let td_ukupno = document.createElement(`td`);
                td_ukupno.innerText = `UKUPNO`;
                tr_ukupno.appendChild(td_ukupno);
                let td_ukupno_cena = document.createElement(`td`);
                td_ukupno_cena.innerText = `${total_prices}`;
                tr_ukupno.appendChild(td_ukupno_cena);
                table.appendChild(tr_ukupno);



            }
        })
        .catch((msg) => {
            console.log(msg);
        });
};
// form_order.addEventListener(`submit`, submit_form1);
form_order.addEventListener(`submit`, submit_form2);


let div_availability = document.querySelector(`#available`);
let form_availability = document.querySelector(`#available form`);

let input_item = document.querySelector(`#item`);
let input_price_min = document.querySelector(`#price_min`);
let input_price_max = document.querySelector(`#price_max`);


function get_available(resource) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.addEventListener(`readystatechange`, function () {
            if (this.readyState === 4 && this.status === 200) {
                let data = JSON.parse(req.responseText);
                resolve(data);
            }
            else if (this.readyState === 4) {
                reject(`Sumptin wrong!`);
            }
        });
        req.open(`GET`, resource);
        req.send();
    });
};

// function submit_form(event) {
//     event.preventDefault();
//     let available = [];
//     let name = input_item.value;
//     let min = input_price_min.value;
//     let max = input_price_max.value;

//     get_available(`./JSON/stock.json`)
//         .then(data => {
//             data.forEach(item => {
//                 if (item.stock > 0 && item.item.contains(name)) {
//                     available.push(item);
//                 }
//             });
//             return get_available(`./JSON/prices.json`);
//         })
//         .then(data => {
//             data.forEach(item => {
//                 if (item.price >= min && item.price <= max) {
//                     just_price.push(item);
//                 }
//             });
//         })
// };


/////////////////////////////////////////////////////////////////

//      NEKI NOVI NACIN ZA PROMISE


async function click_get_items() { // pravimo asinhronu funkciju - automatski vraca promise
    let name = input_item.value;
    let min = input_price_min.value;
    let max = input_price_max.value;
    let data1 = await get_item_return_promise(`./JSON/stock.json`); // pozovi promis i cekaj da zavrsi i ako je sve uredu i smesti datu u ovu promenljivu (await ne radi ako sama funkcija nema async klucnu rec).
    let available = [];
    data1.forEach(item => {
        if (item.stock > 0) {
            available.push(item.id);
        }
    });

    let data2 = await get_item_return_promise(`./JSON/prices.json`);
    let tabela = document.createElement(`table`);

    data2.forEach(item => {
        if (available.includes(item.id) && item.item.includes(name) && item.price >= min && item.price <= max) {
            let tr = document.createElement(`tr`);
            let td_naziv = document.createElement(`td`);
            let td_cena = document.createElement(`td`);
            td_naziv.innerText = `${item.item}`;
            td_cena.innerText = `${item.price}`;
            tr.appendChild(td_naziv);
            tr.appendChild(td_cena);
            tabela.appendChild(tr);
        }
    });
    return tabela;

};

function submit_form(event) {
    event.preventDefault();
    click_get_items()
        .then(data => {
            div_availability.appendChild(data); // data a ne tabela jer data je parametar koji je ustvari ova tabela koja je returnovana...
        })
        .catch(error => {
            console.log(error);
        })
};

form_availability.addEventListener(`submit`, submit_form);