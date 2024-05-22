document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById('preloader');
    var mainContent = document.getElementById('main-content');

    // Hide preloader when the page is fully loaded
    window.addEventListener("load", function() {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
