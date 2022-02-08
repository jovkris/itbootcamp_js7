console.log(db);

let ul = document.querySelector(`ul`);
let form = document.querySelector(`form`);
// NE RADI SE OVAKO 
/*
db.collection(`tasks`)
.orderBy(`start_date`, `desc`)
.get()
.then(snapshot =>{
    if (!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            let obj = doc.data();
            let li = document.createElement(`li`);
            li.innerHTML = `${obj.title} (${obj.start_date.toDate()}) [${obj.description}]`; // toDate(); pretvara timestamp u normalan datum
            ul.appendChild(li);
            if (obj.priority === true) {
                li.style.color = `red`;
            }
        });
    }
})
.catch(err =>{
    console.log(`Greska: ${err}`);
});
*/



form.addEventListener(`submit`, function(event) {
    event.preventDefault();
    let title = this.title.value; // pristupamo title id-u.value
    let start_date = this.start_date.value;
    let due_date = this.due_date.value;
    let priority = this.priority.checked;
    let description = this.description.value;
    // console.log(title + ` ` + start_date + ` ` + due_date + ` ` + priority + ` ` + description);

    let start_date_obj = new Date(start_date);
    let due_date_obj = new Date(due_date);
    let start_date_ts = firebase.firestore.Timestamp.fromDate(start_date_obj);
    let due_date_ts = firebase.firestore.Timestamp.fromDate(due_date_obj);

    let obj = {
        title: title,
        start_date: start_date_ts,
        due_date: due_date_ts,
        priority: priority,
        description: description
    };
    db.collection(`tasks`)
    .add(obj)
    .then(() =>{
        console.log(`Uspesno dodat novi zadatak`);
    })
    .catch(err =>{
        console.log(`Greska prilikom dodavanja zadatka: ${err}`);
    });
});


// RADI SE OVAKO

db.collection(`tasks`)
.onSnapshot(snapshot =>{ // svaki put cim se nesto promeni u ovoj kolekciji, vraca nam apdejtovan snepshot i ovo NIJE kolekcija dokumenata (sadrzi informacije i o promenama koje su se desile)
    let changes = snapshot.docChanges(); // promene su niz
    // console.log(changes);
    changes.forEach(change => {
        let type = change.type;
        let doc = change.doc;
        let id = doc.id;
        if (type == `added`) {
            let obj = doc.data();
            let li = document.createElement(`li`);
            li.id = id;
            li.innerHTML = `${obj.title} (${obj.start_date.toDate()}) [${obj.description}]`; // toDate(); pretvara timestamp u normalan datum
            ul.appendChild(li);
            if (obj.priority === true) {
                li.style.color = `red`;
            }
            let button = document.createElement(`button`);
            button.innerHTML = `Delete task`;
            li.appendChild(button);
           
        }
        else if(type == `removed`){
            let li = document.getElementById(id);
            li.remove(); // brisemo iz dom stabla
        }
    });
}); 

ul.addEventListener(`click`, function(event){
    if(event.target.tagName === `BUTTON`){
        let li = event.target.parentElement;
        let id = li.id;
        db.collection(`tasks`)
        .doc(id)
        .delete()
        .then(() =>{
            alert(`Uspesno obrisan task`);
        })
        .catch(err =>{
            alert(`Greska prilikom brisanja task-a ${err}`)
        });
    }
});

