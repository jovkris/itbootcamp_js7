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

let blog4 = {
    title: `ki ka ku ko je he he`,
    likes: 150,
    dislikes: 43
};

let blog5 = {
    title: `neka tema bloga neko nesto`,
    likes: 50,
    dislikes: 3
};



let arrBlogs = [blog1, blog2, blog3];

let user1 = {
    username: `JohnDoe`,
    age: 20,
    blogs: [blog1, blog2, blog3],

    logBlogs: function () {
        this.blogs.forEach(obj => {
            console.log(obj.title);
        });
    },

    myLikes: function () {
        let s = 0;
        this.blogs.forEach(bl => {
            s += bl.likes;
        });
        return s;
    }

};

let user2 = {
    username: `StefanStanimirovic`,
    age: 32,
    blogs: [blog4, blog5],

    myLikes: function () {
        let s = 0;
        this.blogs.forEach(bl => {
            s += bl.likes;
        });
        return s;
    }

};

console.log(user1.username);

// podaci o prvom blogu korisnika 1

console.log(user1.blogs[0]);

// naslov 1 bloga korisnika 1

console.log(user1.blogs[0].title);

// 1. ZADATAK

// niz korisnika

let users = [user1, user2];
// ko su autori blogova?

users.forEach(el => {
    console.log(el.username);
});

// svi blogovi autora

users.forEach(u => {
    let blogovi = u.blogs;
    blogovi.forEach(blog => {
        console.log(blog.title);
    });
});

// 2. ZADATAK

// Ispisati imena onih autora koji imaju ispod 30 godina

users.forEach(u => {
    if (u.age < 30) {
        console.log(u.username);
    }
});

// 3. ZADATAK

console.log(`Ispisati naslove onih blogova koji imau vise od 50 lajkova`);

users.forEach(u => {
    let blogsU = u.blogs;
    u.blogs.forEach(b => {
        if (b.likes > 50) {
            console.log(b.title);
        }
    });
});

// 4. ZADATAK

console.log(`Ispisati sve blogove autora ciji je username "JohnDoe"`);


users.forEach(u => {
    let blogsU = u.blogs;
    if (u.username == `JohnDoe`) {
        blogsU.forEach(b => {
            console.log(b.title);
        });
    }


});


// 5. ZADATAK

console.log(`Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali`);

users.forEach(u => {
    let userb = u.blogs;
    let sumlikes = 0;
    userb.forEach(bl => {
        sumlikes += bl.likes;
    });
    if (sumlikes > 100) {
        console.log(u.username);
    }
});



// 6. ZADATAK

console.log(`Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena`);

let globalAvgLikes = arr => {
    let globalSum = 0; // suma svih lajkova svih korisnika
    let globalBr = 0; // broj blogova svih korisnika
    arr.forEach(u => {
        globalSum += u.myLikes();
        globalBr += u.blogs.length;
    });
    return globalSum / globalBr;
}
console.log(globalAvgLikes(users));

let blogoviSaNatprosecnoLajkva = arr => {
    let avg = globalAvgLikes(arr);
    arr.forEach(u => {
        u.blogs.forEach(b => {
            if (b.likes > avg) {
                console.log(b.title);
            }
        });
    });
}
blogoviSaNatprosecnoLajkva(users);

// 7. ZADATAK

console.log(`Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena`);

users.forEach(u => {
    let userb = u.blogs;
    let brl = 0;
    let sumlikes = 0;
    let brd = 0;
    let sumdislikes = 0;
    userb.forEach(bl => {
        sumlikes += bl.likes;
        brl++;
        sumdislikes += bl.dislikes;
        brd++;
    });
    let prosekl = sumlikes / brl;
    let prosekd = sumdislikes / brd
    userb.forEach(bl => {
        if (bl.likes > prosekl && bl.dislikes < prosekd) {
            console.log(bl.title);
        }
    });
});

// 8. ZADATAK

