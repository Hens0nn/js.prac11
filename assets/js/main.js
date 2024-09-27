'use stict';
let menuElems = document.querySelectorAll('.menu__elem')

menuElems.forEach(menuElem=>{
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu__btn');

    menuElem.addEventListener('mouseenter',function(){
        submenu.classList.add('active');
        btn.classList.add('active');
    })
    menuElem.addEventListener('mouseleave',function(){
        submenu.classList.remove('active');
        btn.classList.remove('active');
    })
})