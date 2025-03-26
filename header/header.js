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

document.addEventListener("click", function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
})

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

