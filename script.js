window.addEventListener("load", showPage);

function showPage() {
    console.log('Showing the page');
    document.querySelector('.header_menu').addEventListener('click', removeHidden);
}

function removeHidden() {
    console.log('Remove hidden');
    document.querySelector('#burger_menu').classList.remove('hidden');
    document.querySelector('.header_menu').removeEventListener('click', removeHidden);
    document.querySelector('.header_menu').addEventListener('click', addHidden);
}

function addHidden() {
    console.log('Remove hidden');
    document.querySelector('#burger_menu').classList.add('hidden');
    document.querySelector('.header_menu').removeEventListener('click', addHidden);
    document.querySelector('.header_menu').addEventListener('click', removeHidden);
}
