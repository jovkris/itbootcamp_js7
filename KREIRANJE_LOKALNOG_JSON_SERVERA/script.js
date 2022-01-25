let sportisti = (resolve, reject) =>{
    let req = new XMLHttpRequest();
    req.addEventListener(`readystatechange`, function(){
        if (this.readyState === 4 && this.status === 200){
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if(this.readyState === 4){
            reject(`An error occured!`);
        }
    });
    req.open(`GET`, `http://localhost:3000/sportisti`);
    req.send();
};

let prosecna_visina = arr =>{
    console.log(`ISPIS PROSECNIH VISINA IGRACA`);
    let visine = 0;
    let prosek = 0;
    arr.forEach(igrac => {
        visine += igrac.visina;
    });
    prosek = visine/arr.length;
    console.log(prosek);
};

let najmanje_transfera = arr =>{
    console.log(`IGRAC SA NAJMANJE TRANSFERA`);
    let najmanje = arr[0];
    for (let i = 1; i<arr.length; i++){
        if(najmanje.timovi.length > arr[i].timovi.length){
            najmanje = arr[i];
        }
    }
    console.log(najmanje.ime, najmanje.prezime);
};

let igrali_za_lejkerse = arr =>{
    console.log(`IGRACI KOJI SU IGRALI ZA LAKERSE`);
    let igrali_su = [];
    arr.forEach(igrac =>{
        igrac.timovi.forEach(tim => {
            if(tim.includes(`Lakers`)){
                igrali_su.push(igrac);
            }
        });
    });
    console.log(igrali_su);
};

let ispis_za_reject = poruka =>{
    console.log(poruka);
};


sportisti(prosecna_visina, ispis_za_reject);
sportisti(najmanje_transfera, ispis_za_reject);
sportisti(igrali_za_lejkerse, ispis_za_reject);