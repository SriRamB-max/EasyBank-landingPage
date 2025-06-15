const header = document.querySelector('.header');
const body = document.querySelector('body');
const mobileMenu = document.querySelector('#mobileMenu');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has_fade');


mobileMenu.addEventListener('click', function(){
        console.log('click mobileMenu');

        if(header.classList.contains('open')){ // Close mobile menu
            body.classList.remove('noScroll')
            header.classList.remove('open');
            fadeElems.forEach(function(element){
                element.classList.add('fade-out');
                element.classList.remove('fade-in');
            });
            
        }
        else{ // Open mobile menu
            body.classList.add('noScroll')
            header.classList.add('open');
            fadeElems.forEach(function(element){
                element.classList.add('fade-in');
                element.classList.remove('fade-out');
            });
        }
    });