const menu = document.querySelector('.menu');
const burger = document.querySelector('.menu__icon');

const body = document.body;

if (menu && burger) {
    burger.addEventListener('click', e => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}
