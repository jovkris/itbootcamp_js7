import generate_image from "./general.js";


function generate_table(parent) {
    let table = document.createElement(`table`);
    table.style.border = `0`;
    parent.appendChild(table);
    return table;
}

function generate_table_row(parent) {
    let tr = document.createElement(`tr`);
    parent.appendChild(tr);
    return tr;
}

function generate_item(parent, src) {
    let td = document.createElement(`td`);
    let img = generate_image(src);
    td.appendChild(img);
    parent.appendChild(td);
    return td;
}

export { generate_table, generate_table_row, generate_item };