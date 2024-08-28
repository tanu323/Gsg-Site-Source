document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL path without the query string or hash
    var currentPath = window.location.pathname.split('/').pop();

    // Get all nav links
    var navLinks = document.querySelectorAll('.nav-link');

    console.log("Nav links Include:  ", navLinks);

    // Find the nav link that matches the current path and set it as active
    navLinks.forEach(function (link) {
        var linkPath = link.getAttribute('href').split('/').pop(); // Convert to lowercase for case insensitivity
        console.log("Linkpath includes:  ", linkPath);

        if (linkPath === currentPath) {
            link.classList.add('active');
            console.log("CurrentPath includes:  ", currentPath);
        } else {
            link.classList.remove('active'); // Remove active class from non-matching links
        }
    });

    // Add a listener for the popstate event to handle back/forward navigation

});