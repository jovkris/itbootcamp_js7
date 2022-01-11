function generate_image(src) {
    let img = document.createElement(`img`);
    img.src = src;
    return img;
}

export default generate_image;