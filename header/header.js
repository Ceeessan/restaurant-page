console.log("Header script loaded!");

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const path = window.location.pathname.includes("pages") ? "../" : "./";
        const response = await fetch(`${path}header/header.html`);
        const data = await response.text();
        document.getElementById("header-container").innerHTML = data;
        logoPath();
        updateMenuPaths()
        loadHeaderContent();
        attachMenuToggle();
        logoLinkPath();

    } catch (error) {
        console.error("Fel vid inläsning av header", error)
    }
});

function loadHeaderContent() {
    const header = document.createElement("header");
    header.src = "../header/header.js";
    header.defer = true;
    document.body.appendChild(header);
}


//Pathway so logo shows on every page
function logoPath() {
    const currentPath = window.location.pathname;
    let path = "./";

    if (currentPath.includes("pages")) {
        path = "../";
    }

    const logo = document.querySelector("#tasteLogoHeader");
    if (logo) {
        logo.src = `${path}assets/taste.png`;
    }
}

function logoLinkPath() {
    document.addEventListener("DOMContentLoaded", function () {
        const currentPath = window.location.pathname;

        let logoPath = "./assets/taste.png";

        if (currentPath.includes("/pages/")) {
            logoPath = "../assets/taste.png";
        }

        const logo = document.getElementById("tasteLogoHeader");
        if (logo) {
            logo.src = logoPath;
        }
    });
}

function updateMenuPaths() {
    const currentPath = window.location.pathname;
    const isInPages = currentPath.includes("/pages/");

    if (currentPath.includes("pages")) {
        path = "../";
    }

    const menuLinks = document.querySelectorAll("#navMenu a");

    menuLinks.forEach(link => {
        let originalHref = link.getAttribute("href");

        if (!originalHref.startsWith("http")) {
            if (isInPages) {
                link.setAttribute("href", `../${originalHref.replace("../", "")}`);
            }
            else {
                link.setAttribute("href", `./${originalHref.replace("./", "")}`);
            }
        }
    });
}

function attachMenuToggle() {
    const toggleMenu = document.getElementById("hamburger");
    const header = document.querySelector(".header-menu");

    toggleMenu.addEventListener("click", function (event) {
        event.stopPropagation();
        if (header.style.display === "block") {
            header.style.display = "none";
        } else {
            header.style.display = "block";
        }
        toggleMenu.classList.toggle("change");
    });

    document.addEventListener("click", function () {
        if (!toggleMenu.contains(event.target) && !header.contains(event.target)) {
            header.style.display = "none";
            toggleMenu.classList.remove("change");
        }
    })
}