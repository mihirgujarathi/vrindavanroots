(function() {
    var nav = document.getElementById('nav');
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = nav.offsetHeight;

    // Add this line to make the nav visible on page load
    nav.classList.add('visible');

    window.addEventListener('scroll', function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            nav.classList.remove('visible');
        } else {
            // Scroll Up
            if (st + window.innerHeight < document.documentElement.scrollHeight) {
                nav.classList.add('visible');
            }
        }

        lastScrollTop = st;
    });
})();
