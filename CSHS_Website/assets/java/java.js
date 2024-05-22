document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        setTimeout(function() {
            var preloader = document.getElementById('preloader');
            preloader.style.display = 'none';
            var mainContent = document.getElementById('main-content');
            mainContent.style.display = 'block';
        }, 5000); // 5000 milliseconds = 5 seconds
    });
});
