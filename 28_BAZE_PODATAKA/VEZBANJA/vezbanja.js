
// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.


db.collection(`customers`)
.orderBy(`name`)
.get()
.then(snapshot =>{
    
    if (!snapshot.empty) {
        let all_customers = snapshot.docs;
        all_customers.forEach(cus => {
            let customer = cus.data();
            console.log(customer.name + ` ` + customer.age + ` ` + customer.salary);
        });
    }
    else{
        console.log(`Nema vakih dokumenata`);
    }
    //  Iz kolekcije customers, pročitati sve klijente koji Imaju adresu u Nišu
    
    return db.collection(`customers`)
    .where(`Adresses`, `array-contains`, `Nis`)
    .get()
    .then(snapshot =>{
        if (!snapshot.empty) {
            let all_customers = snapshot.docs;
            all_customers.forEach(cus => {
                let customer = cus.data();
                console.log(`Adresses sadrzi Nis:   ${customer.name} ${customer.age} ${customer.salary}`);
            });
        }
        else {
            console.log(`Nema vakih dokumenata`);
        }
        //  Iz kolekcije customers, pročitati sve klijente koji Imaju platu veću ili jednaku od 500

        return db.collection(`customers`)
        .where(`salary`, `>=`, 500)
        .get()
        .then(snapshot =>{
            if (!snapshot.empty) {
                let all_customers = snapshot.docs;
                all_customers.forEach(cus => {
                    let customer = cus.data();
                    console.log(`Imaju platu vecu ili jednaku od 500:   ${customer.name} ${customer.age} ${customer.salary}`);
                });
            }
            else {
                console.log(`Nema vakih dokumenata`);
            }

            //Imaju platu između 300 i 800,

            return db.collection(`customers`)
            .where("salary", ">=", 300)
            .where("salary", "<=", 800)
            .get()
            .then(snapshot =>{
                if (!snapshot.empty) {
                    let all_customers = snapshot.docs;
                    all_customers.forEach(cus =>{
                        let customer = cus.data();
                        console.log(`Imaju platu između 300 i 800:  ${customer.name} ${customer.age} ${customer.salary}`);
                    });
                }
                else{
                    console.log(`Nema takvih`);
                }
                // imaju platu manju od 900 i imaju 30 godina
                return db.collection(`customers`)
                .where(`salary`, `<`, 900)
                .where(`age`, `==`, 30)
                .get()
                .then(snapshot =>{
                    if (!snapshot.empty) {
                        let all_customers = snapshot.docs;
                        all_customers.forEach(cus =>{
                            let customer = cus.data();
                            console.log(`Imaju 30 i platu manju od 900  ${customer.name} ${customer.age} ${customer.salary}`);
                        });
                    }
                    else{
                        console.log(`Nema takvih customera`);
                    }
                    // Imaju adresu u Nišu ili Beogradu
                    return db.collection(`customers`)
                    .where(`Adresses`, `array-contains-any`, [`Nis`, `Beograd`])
                    .get()
                    .then(snapshot =>{
                        if (!snapshot.empty) {
                            let all_customers = snapshot.docs;
                            all_customers.forEach(cus =>{
                                let customer = cus.data();
                                console.log(`Ili su iz Nisa ili iz beograda  ${customer.name} ${customer.age} ${customer.salary}`);
                            });
                        }
                        else{
                            console.log(`Nema takvih customera`);
                        }
                        return db.collection(`customers`)
                        .where(`Adresses`, `array-contains-any`, [`Nis`, `Beograd`])
                        .get()
                        .then(snapshot =>{
                            if (!snapshot.empty) {
                                let all_customers = snapshot.docs;
                                all_customers.forEach(cus =>{
                                    let customer = cus.data();
                                    console.log(`Imaju 22, 25 ili 28 godina:  ${customer.name} ${customer.age} ${customer.salary}`);
                                });
                            }
                            else{
                                console.log(`Nema takvih customera`);
                            }
                        })
                    })
                })
            })
        })    
    })
})
.catch(err =>{
    console.log(`Imamo neku gresku ${err}`);
});


