let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})



const myObeserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
      if (entry.isIntersecting === true){
        entry.target.classList.add('show')
      }  else{
        entry.target.classList.remove('show')
      }
    })
})
const elements = document.querySelectorAll('.hidden')

elements.forEach((element)=> myObeserver.observe(element));