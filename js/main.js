const iconaOpen = document.querySelector(".fa-bars");
const iconaClose = document.querySelector(".fa-times");
const hmenu = document.querySelector(".hamburger-menu");

iconaOpen.addEventListener('click', openUp);
iconaClose.addEventListener('click', closeDown);

function openUp(){
    hmenu.classList.add("active");
}

function closeDown(){
    hmenu.classList.remove("active");
}