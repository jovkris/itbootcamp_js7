// 1. pristupanje konkretnom dokumentu u kolekciji
// 2. pristupanje svim ili odredjenim dokumentima iz kolekcije



// 1.

db.collection(`customers`)
.doc(`01`)
.get()
.then((doc) =>{
    if(doc.exists){ // pitamo da li postoji
        console.log(`postoji dokument ${doc.id}`);
        let obj = doc.data(); // konvertuje sta god ono bilo u normalan objekat
        console.log(obj);
    }
    else{
        console.log(`ne postoji dokument ciji je id: ${doc.id}`);
    }
    // polja: doc.id (string) , doc.exists (boolean)
    // metoda: doc.data();
})
.catch(err =>{
    console.log(`imamo error: ${err}`);
});

// 2.

db.collection(`customers`)
.get()
.then(snapshot =>{ 
    if(!snapshot.empty){ // pitamo da li nije prazan snapshot sto mu dodje iskreno ne secam se..... kolekcija i guess
        let all_docs = snapshot.docs;
        all_docs.forEach(doc => {
            console.log(doc.id, doc.data());
        });
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err =>{
    console.log(`nemoguce dohvatiti dokumente iz kolekcije ${err}`);
});


// 1. Dohvatanje dokumenata u odredjenom redolsdu (sortiranje po odredjenom polju...)
// 2. Dohvatanje odredjenog broja dokumenata iz kolekcije
// 3. Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume (filtriranje)


// 1. 

db.collection(`customers`)
.orderBy(`age`, `desc`)
.orderBy(`name`)
.get()
.then(snapshot =>{
    if(!snapshot.empty){
        let all_docs = snapshot.docs;
        all_docs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name + ` ` + obj.age + ` ` + obj.salary);
        });
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err =>{
    console.log(`nemoguce dohvatiti dokumente iz kolekcije ${err}`);
});



// 2.

db.collection(`customers`)
.orderBy(`age`, `desc`)
.orderBy(`name`)
.limit(1)
.get()
.then(snapshot =>{
    if(!snapshot.empty){
        let all_docs = snapshot.docs;
        all_docs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name + ` ` + obj.age + ` ` + obj.salary);
        });
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err =>{
    console.log(`nemoguce dohvatiti dokumente iz kolekcije ${err}`);
});


// 3.


db.collection(`customers`)
//.orderBy(`age`, `desc`)
.where(`age`, `>=`, 25)
.where(`salary`, `==`, 80000)
// .orderBy(`age`, `desc`)
// .orderBy(`name`)
// .limit(1)
.get()
.then(snapshot =>{
    if(!snapshot.empty){
        let all_docs = snapshot.docs;
        all_docs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name + ` ` + obj.age + ` ` + obj.salary);
        });
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err =>{
    console.log(`nemoguce dohvatiti dokumente iz kolekcije ${err}`);
});