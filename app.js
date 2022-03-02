let box = document.getElementsByClassName('flex')
let buttons = document.getElementsByClassName('btn')
let index = 0

// for(btn in buttons) {
//     btn.addEventListener('click', swipe)
// }

for(btn of buttons) {
    console.log(btn);
    btn.addEventListener('click', swipe)
}


function swipe() {
    console.log(index);
    box[index].classList.add('swipe')
    ++index
}




//     event.target.classList.add('swipe')
// })