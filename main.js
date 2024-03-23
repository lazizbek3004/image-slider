

let small = document.querySelector('.small')
let yangi = document.querySelector('.new')
let conton = document.querySelector('.container')
let btn = document.querySelector('.btn')
let hidden = document.querySelector('.hidden')

function change(){
    small.classList.add('smallA')
    yangi.classList.add('newA')
    conton.classList.add('containerA')
    btn.classList.add('btnA')
    btn.innerHTML = 'Different'
    hidden.style.display = 'flex'
}

hidden.addEventListener('click', ()=>{
    small.classList.remove('smallA')
    yangi.classList.remove('newA')
    conton.classList.remove('containerA')
    btn.classList.remove('btnA')
    btn.innerHTML = 'Change the image'
    hidden.style.display = 'none'
})


