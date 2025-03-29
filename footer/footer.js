console.log("Header script loaded!");

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const path = window.location.pathname.includes("pages") ? "../" : "./";
        const response = await fetch(`${path}footer/footer.html`);
        const data = await response.text();
        document.getElementById("footer-container").innerHTML = data;
        loadHeaderContent();
        followLogoPath();

    } catch (error) {
        console.error("Fel vid inläsning av footer", error)
    }
});

function loadHeaderContent() {
    const header = document.createElement("footer");
    header.src = "../footer/footer.js";
    header.defer = true;
    document.body.appendChild(header);
}

function followLogoPath() {
    document.addEventListener("DOMContentLoaded", function () {
        const currentPath = window.location.pathname;

        let socialIconPath = "./assets/";

        if (currentPath.includes("/pages/")) {
            socialIconPath = "../assets/";
        }

        const linkedinIcon = document.getElementById("linkedinIcon");
        const facebookIcon = document.getElementById("facebookIcon");

        if (linkedinIcon) {
            linkedinIcon.src = `${socialIconPath}linkedin.svg`;
        }

        if (facebookIcon) {
            facebookIcon.src = `${socialIconPath}facebook.svg`;
        }
    });
}
