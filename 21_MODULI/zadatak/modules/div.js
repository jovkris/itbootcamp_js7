import generate_image from "./general.js";

function generate_div(parent) {
    let div = document.createElement(`div`);
    div.style.overflow = `hidden`;
    parent.appendChild(div);
    return div;
}

function generate_item(parent, src) {
    let div = document.createElement(`div`);
    div.style.float = `right`;
    let img = generate_image(src);
    div.appendChild(img);
    parent.appendChild(div);

    return div;
}

export { generate_div, generate_item };