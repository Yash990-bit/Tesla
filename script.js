document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById('menuBtn');

    const aside = document.querySelector('aside');
    const backdrop = document.querySelector('.backdrop');

    const closeButton = document.querySelector('aside button.close');

    const joinTeslaButton = document.querySelector('.car .button');

    menuButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        aside.style.right = '0'; 
        backdrop.style.display = 'block'; 
    });

    closeButton.addEventListener('click', function () {
        aside.style.right = '-320px'; 
        backdrop.style.display = 'none'; 
    });

    backdrop.addEventListener('click', function () {
        aside.style.right = '-320px'; 
        backdrop.style.display = 'none'; 
    });

    joinTeslaButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        alert("You are now a member of Tesla!"); 
    });
});
