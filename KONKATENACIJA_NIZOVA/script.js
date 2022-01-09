
let dan1 = {
    a: [1, 2, 3, 4, 5],
};

let dan2 = {

    a: [6, 7, 8, 9, 10],

};

let dan3 = {
    a: [11, 12, 13, 14, 15],
};

let dani = [dan1, dan2, dan3];


let veci_od_proseka = arr => {
    let sve_temp_zajedno = [];
    let prosek_svih_temperatura = 0;
    arr.forEach(el => {
        el.a.forEach(temperature => {
            sve_temp_zajedno = sve_temp_zajedno.concat(temperature);
        });

    });
    let suma = 0;
    sve_temp_zajedno.forEach(temp => {
        suma += temp;
    });

    prosek_svih_temperatura = suma / sve_temp_zajedno.length;
    console.log(prosek_svih_temperatura);

}

veci_od_proseka(dani);