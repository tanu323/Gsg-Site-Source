const showMenu = (toggleId, navId) => {
    var toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
            toggle.classList.toggle('show-icon');
        });
    } else {
        console.error("Toggle or nav element not found");
    }
}
showMenu("nav_toggle", "nav_menu")



// Show Droopdown menu

const dropdownItems = document.querySelectorAll('.dropdown_item')

dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown_button')
    dropdownButton.addEventListener('click', () => {

        console.log("clicked");

        var showDropdown = document.querySelector('.show-dropdown')
        toggleItem(item)

        if (showDropdown && showDropdown != item) {
            toggleItem(showDropdown)
        }
    })
})

const toggleItem = (item) => {
    var dropdownContainer = item.querySelector('.dropdown_container')

    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    }
    else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

const mediaQuery = matchMedia('(min-width: 1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown_container')


const removeStyle = () => {
    if (mediaQuery.matches) {
        dropdownContainer.forEach((e) => {
            e.removeAttribute('style')
        })
        dropdownItems.forEach((e) => {
            e.classList.remove('show-dropdown')
        });
    }
}

addEventListener('resize', removeStyle)
document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL path without the query string or hash
    var currentPath = window.location.pathname.split('/').pop();

    // Get all nav links
    var navLinks = document.querySelectorAll('.nav-link a');

    console.log("Nav links Include:  ", navLinks);

    // Find the nav link that matches the current path and set it as active
    navLinks.forEach(function (link) {
        // Get the href attribute
        var href = link.getAttribute('href');

        // Make sure href exists before proceeding
        if (href) {
            var linkPath = href.split('/').pop(); // Convert to lowercase for case insensitivity
            console.log("Linkpath includes:  ", linkPath);

            if (linkPath !== currentPath) {
                link.classList.remove('active');
            } else {
                link.classList.add('active'); // Add active class for matching links
                console.log("Active path includes:  ", currentPath);
            }
        } else {
            console.warn('Link has no href attribute:', link);
        }
    });
});


var govtClientContainer = document.querySelector("#Govt-Client-container");
var fixed = document.querySelector("#Govt-Clients")
govtClientContainer.addEventListener("mouseenter", () => {
    fixed.style.display = "block"
})

govtClientContainer.addEventListener("mouseleave", () => {
    fixed.style.display = "none";
    details.open = false; // Close the details
})

var govtClients = document.querySelectorAll(".Govt-Client");
var details = document.getElementById("details");
govtClients.forEach((client) => {
    client.addEventListener("mouseenter", () => {
        var image = client.getAttribute("src");
        fixed.style.backgroundImage = `url(${image})`
    })
})



// YouTube vedio Player

// var ytVedioSections = document.querySelectorAll(".video-wrapper");

// ytVedioSections.forEach((elem) => {

//     console.log("Elem contains:", elem.childNodes[3])
//     // Accessing the iframe (third child node)
//     elem.addEventListener("mouseenter", () => {
//         elem.childNodes[3].style.opacity = 1;
//         elem.childNodes[3].play();
//     })
//     elem.addEventListener("mouseleave", () => {
//         elem.childNodes[3].style.opacity = 0;
//         elem.childNodes[3].load();
//     })


// });