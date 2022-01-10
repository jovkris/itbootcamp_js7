import {generate_image} from "./general.js";

function generate_list(parent) {
    let ul = document.createElement(`ul`);
    ul.style.listStyleType = `none`;
    ul.style.overflow = "hidden";
    parent.appendChild(ul);
    return ul;
}

function generate_list_item(parent, src) {
    let li = document.createElement(`li`);
    li.style.float = `left`;
    let img = generate_image(src);
    li.appendChild(img);
    parent.appendChild(li);
    return li;
}

export {generate_list, generate_list_item};