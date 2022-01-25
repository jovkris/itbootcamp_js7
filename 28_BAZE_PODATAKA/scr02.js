console.log(`radi li ovo?`);
console.log(`radi :D`);

let novi_film1 = {
    name: `The Fearless Vampire Killers`,
    director: {
        name: `Roman`,
        surname: `Polanski`
    },
    release_year: 1967,
    genres: [`Comedy`, `Horror`],
    rating: 7.2
};

let novi_film2 = {
    name: `Se7en`,
    director: {
        name: `David`,
        surname: `Fincher`
    },
    release_year: 1995,
    genres: [`Thriller`, `Crime`, `Drama`, `Mystery`],
    rating: 8.6
};

db.collection(`movies`).doc(`mov02`).set(novi_film1)
    .then(() => {
        console.log(`kreirala sam novi film u kolekciji filmova yey`);
        return db.collection(`movies`).doc(`mov03`).set(novi_film2)
            .then(() => {
                console.log(`kreirala sam jos jedan`);
                return db.collection(`movies`).doc(`mov01`).update({
                    release_year: 1900
                })
                    .then(() => {
                        console.log(`Ubacivanje zanra neki zanr u mov02`);
                        return db.collection(`movies`).doc(`mov02`).update({
                            genres: firebase.firestore.FieldValue.arrayUnion(`Neki zanr`)
                        })
                            .then(() => {
                                console.log(`izbacivanje zanra crime iz filma mov03`);
                                return db.collection(`movies`).doc(`mov03`).update({
                                    genres: firebase.firestore.FieldValue.arrayRemove(`Crime`)
                                })
                                    .then(() => {
                                        console.log(`menjam ime rezisera mov01 u Nebojsa`);
                                        return db.collection(`movies`).doc(`mov01`).update({
                                            "director.name": "Nebojsa"
                                        })
                                    })
                            })
                    })
            })
    })
    .catch(err => {
        console.log(`nisi ipak ehehehe ${err}`);
    });







