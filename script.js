const btn = document.querySelector('.menu-amburg');
const menu = document.querySelector('.list');

btn.addEventListener('click', function(){
    menu.classList.toggle('ativo');
})
