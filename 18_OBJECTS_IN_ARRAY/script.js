console.log(`yoy`);

let blog1 = {
    title: `osnovni HTML tagovi`,
    likes: 30,
    dislikes: 5
};

let blog2 = {
    title: `css bla bla bla`,
    likes: 5,
    dislikes: 90
};

let blog3 = {
    title: `neam pojma`,
    likes: 50,
    dislikes: 3
};

let arrBlogs = [blog1, blog2, blog3];

arrBlogs.forEach(obj => {
    console.log(obj);
});

arrBlogs.forEach(obj => {
    document.body.innerHTML += `<h3>${obj.title}</h3>`;
    document.body.innerHTML += `<p>likes: ${obj.likes}</p>`;
    document.body.innerHTML += `<p>dislikes: ${obj.dislikes}</p>`;
});