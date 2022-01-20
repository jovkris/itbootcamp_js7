
let lijevi = document.getElementsByTagName(`li`);
let all_li = Array.from(lijevi);
console.log(all_li);

for (let i = 0; i<all_li.length; i++){
    all_li[i].addEventListener(`click`, () =>{
        // if (all_li[i].style.textDecoration === `line-through`) {
        //     all_li[i].style.textDecoration = `none`;
        // }
        // else{
        //     all_li[i].style.textDecoration = `line-through`;
        // }

        all_li[i].classList.toggle(`line`);
    });
}

