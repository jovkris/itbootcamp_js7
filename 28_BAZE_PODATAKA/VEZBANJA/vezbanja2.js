// db.collection(`tasks`)
// .get()
// .then(snapshot =>{
//     if (!snapshot.empty) {
//         let all_tasks = snapshot.docs;
//         all_tasks.forEach(tas => {
//            let task = tas.data();
//            console.log(task.title);
//         });
//     }
//     else{
//         console.log(`pa ne znam...`);
//     }
// })
// .catch(err =>{
//     console.log(`nesto nisi lepo uradila ${err}`);
// });



// db.collection(`tasks`)
// .where(`priority`, `==`, true)
// .get()
// .then(snapshot =>{
//     if (!snapshot.empty) {
//         let all_tasks = snapshot.docs;
//         all_tasks.forEach(tas => {
//            let task = tas.data();
//            console.log(task.title);
//         });
//     }
//     else{
//         console.log(`Nema takvih`);
//     }
// })
// .catch(err =>{
//     console.log(`nesto nisi lepo uradila ${err}`);
// });

// let now = new Date();

// let year = now.getFullYear();
// let date1 = new Date(year, 0, 1); // 1. januar tekuce godine
// let date2 = new Date(year +1, 0, 1); // 1. januar naredne godine
// let date1_timestamp = firebase.firestore.Timestamp.fromDate(date1);
// let date2_timestamp = firebase.firestore.Timestamp.fromDate(date2);


// db.collection(`tasks`)
// .where(`due_date`, `>=`, date1_timestamp)
// .where(`due_date`, `<`, date2_timestamp)
// .get()
// .then(snapshot =>{
//     if (!snapshot.empty) {
//         let all_tasks = snapshot.docs;
//         all_tasks.forEach(tas => {
//            let task = tas.data();
//            console.log(task.title);
//         });
//     }
//     else{
//         console.log(`Nema takvih`);
//     }
// })
// .catch(err =>{
//     console.log(`nesto nisi lepo uradila ${err}`);
// });


// let now = new Date();
// let date1_timestamp = firebase.firestore.Timestamp.fromDate(now);


// db.collection(`tasks`)
// .where(`due_date`, `<=`, date1_timestamp)
// .get()
// .then(snapshot =>{
//     if (!snapshot.empty) {
//         let all_tasks = snapshot.docs;
//         all_tasks.forEach(tas => {
//            let task = tas.data();
//            console.log(task.title);
//         });
//     }
//     else{
//         console.log(`Nema takvih`);
//     }
// })
// .catch(err =>{
//     console.log(`nesto nisi lepo uradila ${err}`);
// });

let now = new Date();
let date1_timestamp = firebase.firestore.Timestamp.fromDate(now);


db.collection(`tasks`)
.where(`start_date`, `>`, date1_timestamp)
.get()
.then(snapshot =>{
    if (!snapshot.empty) {
        let all_tasks = snapshot.docs;
        all_tasks.forEach(tas => {
           let task = tas.data();
           console.log(task.title);
        });
    }
    else{
        console.log(`Nema takvih`);
    }
})
.catch(err =>{
    console.log(`nesto nisi lepo uradila ${err}`);
});