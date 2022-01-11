// import { generate_list, generate_item as generate_list_item } from "./modules/list.js";
// import { generate_table, generate_table_row, generate_item as generate_table_item } from "./modules/table.js";

// let list = generate_list(document.body);
// generate_list_item(list, `img/1.jpg`);
// generate_list_item(list, `img/2.jpg`);
// generate_list_item(list, `img/3.jpg`);

// let table = generate_table(document.body);
// let tr = generate_table_row(table);
// generate_table_item(tr, `img/1.jpg`);
// generate_table_item(tr, `img/2.jpg`);
// generate_table_item(tr, `img/3.jpg`);

// ovde su idalje generateitem isto nazvani u razlicitim modulima, ali
// importovani su kao objekti tako da pozivamo objekat sa njegovim generate item 

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";
import * as Div from "./modules/div.js";
console.log(List);

let list = List.generate_list(document.body);
List.generate_item(list, "img/1.jpg");
List.generate_item(list, "img/2.jpg");
List.generate_item(list, "img/3.jpg");

let table = Table.generate_table(document.body);
let tr = Table.generate_table_row(table);
Table.generate_item(tr, "img/1.jpg");
Table.generate_item(tr, "img/2.jpg");
Table.generate_item(tr, "img/3.jpg");

let div = Div.generate_div(document.body);
Div.generate_item(div, "img/1.jpg");
Div.generate_item(div, "img/2.jpg");
Div.generate_item(div, "img/3.jpg");