const burger = document.querySelector('.burger-menu');
const menu =  document.querySelector('.menu');

burger.addEventListener('click', function(){
    menu.classList.toggle('show-menu')
    burger.classList.toggle('show-menu')

})