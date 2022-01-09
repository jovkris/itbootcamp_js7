console.log(`yoy`);

let blog1 = {
    title: `osnovni HTML tagovi`,
    likes: 30,
    dislikes: 5
};

let blog2 = {
    title: `css bla bla bla`,
    likes: 50,
    dislikes: 25
};

let blog3 = {
    title: `neam pojma`,
    likes: 50,
    dislikes: 3
};

let arrBlogs = [blog1, blog2, blog3];


// ispis foreach
arrBlogs.forEach(obj => {
    console.log(obj);
});

arrBlogs.forEach(obj => {
    document.body.innerHTML += `<h3>${obj.title}</h3>`;
    document.body.innerHTML += `<p>likes: ${obj.likes}</p>`;
    document.body.innerHTML += `<p>dislikes: ${obj.dislikes}</p>`;
});

// ispis for petljom

for (let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}

// kada hocemo da menjamo vrednost nekog specificni element

blog3.title = `sad je ovaj naslov`;
console.log(blog3.title); // pristupanje direkt jer je definisan ovde mmda kapiras?
arrBlogs[blog3.title] = `a sad je ovaj`; // pristupanje preko niza
console.log(arrBlogs[blog3.title]);
arrBlogs[2].title = `je l  sad ovo!`; // a moze i ovako preko niza
console.log(arrBlogs[2].title);

///////////////////////////////////////////////////////
//                      VEZBANJE
///////////////////////////////////////////////////////

//1. ZADATAK

let sum_likes = arr => {
    let sum = 0;
    // 1 nacim (sa foreach)
    // arr.forEach(obj => {
    //     sum += obj.likes;
    // });

    // 2. nacin for petljom
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].likes;
    }
    return sum;
}
console.log(sum_likes(arrBlogs));


// Lajkovi iz samo 1 i treceg bloga

let sum13 = arrBlogs[0].likes + arrBlogs[2].likes;
// ili ovako
sum13 = arrBlogs[0][`likes`] + arrBlogs[2][`likes`]; // isto je ali prvi zapis je laksi...

// 3. ZADATAK

let more_likes = arr => {
    arr.forEach(obj => {
        if (obj.likes > obj.dislikes) {
            console.log(obj.title);
        }
    });
}
more_likes(arrBlogs);

// 2. ZADATAK

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosek = arr => {
    let sum = sum_likes(arr);
    return sum / arr.length;
}

console.log(prosek(arrBlogs));


// 4. ZADATAK

/* Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
*/

let bar_duplo_vise = arr => {
    arr.forEach(obj => {
        if (obj.likes >= 2 * obj.dislikes) {
            console.log(obj.title);
        }
    });
}

bar_duplo_vise(arrBlogs);

// 5. ZADATAK

/* Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom */

let uzvicnik = arr => {
    arr.forEach(obj => {
        if (obj.title.endsWith(`!`)) {
            console.log(obj.title);
        }
    });
}

uzvicnik(arrBlogs);

//////////////////////////////////////////////////////



