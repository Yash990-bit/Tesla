document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById('menuBtn');         
    const aside = document.querySelector('aside');                 
    const backdrop = document.querySelector('.backdrop');         
    const closeButton = document.querySelector('aside button.close'); 
    const joinTeslaButton = document.querySelector('.car .button');  

    menuButton.addEventListener('click', function (event) {
        event.preventDefault();
        
        aside.style.transition = "right 0.5s ease-in-out";
        aside.style.right = '0';  
        
        backdrop.style.display = 'block';  
        backdrop.style.opacity = '0.7';  
        backdrop.style.transition = 'opacity 0.3s ease-in-out'; 
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

    function toggleText(sectionId) {
        var textElement = document.getElementById('learnMoreText' + sectionId);

        if (textElement.style.display === "none" || textElement.style.display === "") {
            textElement.style.display = "block";
        } else {
            textElement.style.display = "none";
        }
    }

    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    learnMoreButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            toggleText(index + 1); 
        });
    });
});
