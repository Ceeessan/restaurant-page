console.log("Header script loaded!");

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("./header/header.html");
        const data = await response.text();
        document.getElementById("header-container").innerHTML = data;
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

