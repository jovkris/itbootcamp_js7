let get_something = () => {
    let object = new Promise((resolve, reject) => {
        resolve(`nesto resolve`);
        // reject(`nesto reject`);
    });
    return object; // vraca promise objekat
};

// then() ce se izvrsiti ako je Promise vratio resolve
// catch ce se izvrsiti ako je promise vratio reject
get_something().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});