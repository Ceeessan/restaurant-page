console.log("Header script loaded!");

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const path = window.location.pathname.includes("pages") ? "../" : "./";
        const response = await fetch(`${path}footer/footer.html`);
        const data = await response.text();
        document.getElementById("footer-container").innerHTML = data;
        loadHeaderContent();

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