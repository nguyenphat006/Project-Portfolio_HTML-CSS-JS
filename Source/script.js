const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-link');

menuIcon.onclick = () =>{
    navLinks.classList.toggle('active');
}

