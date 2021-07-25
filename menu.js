const btnMobile = document.getElementById('btn-moile');

function toggleMenu( {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
})

btnMobile.addEventListener('click', toggleMenu);