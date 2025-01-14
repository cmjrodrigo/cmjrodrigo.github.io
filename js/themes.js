
let lastTh = localStorage.getItem("Theme");

function setlight (){
    document.documentElement.style.setProperty("--main-background-color", "rgb(253,253,253)");
    document.documentElement.style.setProperty("--nav-background-color", "rgb(204, 204, 204)");
    document.documentElement.style.setProperty("--button-hover-color", "rgb(153, 153, 153)");
    document.documentElement.style.setProperty("--button-active-color", "rgb(37, 37, 37)");
    document.documentElement.style.setProperty("--button-text-active-color", "white");
    document.documentElement.style.setProperty("--border-color", "black");
    document.documentElement.style.setProperty("--footer-background-color", "rgb(31, 31, 31)");
}

function setdark(){
    document.documentElement.style.setProperty("--main-background-color", "rgb(32, 30, 30)");
    document.documentElement.style.setProperty("--nav-background-color", "rgb(82, 79, 79)");
    document.documentElement.style.setProperty("--button-hover-color", "rgb(238, 238, 238)");
    document.documentElement.style.setProperty("--button-active-color", "rgb(248, 248, 248)");
    document.documentElement.style.setProperty("--button-text-active-color", "black");
    document.documentElement.style.setProperty("--border-color", "white");
    document.documentElement.style.setProperty("--footer-background-color", "rgb(201, 201, 201)");
}

if (lastTh === "dark") {
    setdark();
} else {
    setlight();
}

document.querySelector("#change-theme").addEventListener("click", function (){
    lastTh = localStorage.getItem("Theme");
    console.log("Clicking TH")

    if (lastTh === "dark") {
        setlight();
        localStorage.setItem("Theme", "light");
        console.log("light")
    } else {
        setdark();
        localStorage.setItem("Theme", "dark");
        console.log("dark")
    }
});