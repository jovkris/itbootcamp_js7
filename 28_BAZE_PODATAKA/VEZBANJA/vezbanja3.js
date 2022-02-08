// db.collection(`movies`)
// .where(`director.name`, `==`, `Nebojsa`)
// .where(`director.surname`, `==`, `Forman`)

// .get()
// .then(snapshot =>{
//     if (!snapshot.empty) {
//         let all_movies = snapshot.docs;
//         // let best_ranked = all_movies[0].data().rating;
//         all_movies.forEach(mov => {
//            let movie = mov.data();
//            console.log(movie);
//         });
        
//     }
//     else{
//         console.log(`Nema takvih`);
//     }
// })
// .catch(err =>{
//     console.log(`radi??? ${err}`);
// });


// db.collection(`movies`)
// .where(`rating`, `>=`, 8)
// .where(`rating`, `<=`, 9)
// .get()
// .then(snapshot =>{
//     if (!snapshot.empty) {
//         let all_movies = snapshot.docs;
//         all_movies.forEach(mov => {
//            let movie = mov.data();
//            console.log(movie.name);
//         });
//     }
//     else{
//         console.log(`Nema takvih`);
//     }
// })
// .catch(err =>{
//     console.log(`radi??? ${err}`);
// });


// db.collection(`movies`)
// .where(`genres`, `array-contains-any`, [`Comedy`, `Tragedy`, `Drama`])
// .get()
// .then(snapshot =>{
//     if (!snapshot.empty) {
//         let all_movies = snapshot.docs;
//         all_movies.forEach(mov => {
//            let movie = mov.data();
//            console.log(movie.name);
//         });
//     }
//     else{
//         console.log(`Nema takvih`);
//     }
// })
// .catch(err =>{
//     console.log(`radi??? ${err}`);
// });


// db.collection(`movies`)
// .where(`release_year`, `>`, 1900)
// .get()
// .then(snapshot =>{
//     if (!snapshot.empty) {
//         let all_movies = snapshot.docs;
//         all_movies.forEach(mov => {
//            let movie = mov.data();
//            console.log(movie.name);
//         });
//     }
//     else{
//         console.log(`Nema takvih`);
//     }
// })
// .catch(err =>{
//     console.log(`radi??? ${err}`);
// });


// db.collection(`movies`)
// .where(`release_year`, `>`, 1900)
// .get()
// .then(snapshot =>{
//     if (!snapshot.empty) {
//         let all_movies = snapshot.docs;
//         all_movies.forEach(mov => {
//            let movie = mov.data();
//            console.log(movie.name);
//         });
//     }
//     else{
//         console.log(`Nema takvih`);
//     }
// })
// .catch(err =>{
//     console.log(`radi??? ${err}`);
// });