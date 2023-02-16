/// TOGGLE DARK MODE WITH ICON CHANGE ///
let darkMode = localStorage.getItem("darkMode");
console.log(darkMode);
const darkModeToggle = document.querySelector("#moon");

const enableDarkMode = () =>{
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
}
const disDarkMode = () =>{
    document.body.classList.remove("dark");
    localStorage.removeItem("darkMode");
}

if (darkMode === "enabled"){
    enableDarkMode();
}


darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    let icon = document.getElementById("moon");
    if (darkMode !== "enabled"){
        enableDarkMode();
        icon.classList.remove("fa-solid");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-solid")
        icon.classList.add("fa-sun")
        
    } else {
        disDarkMode();
        icon.classList.remove("fa-solid");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-solid")
        icon.classList.add("fa-moon")
        
    }

});

///ONLOAD Function - for checking moon/sun icon

window.onload = function() {
    let reloading = localStorage.getItem("darkMode");
    let icon = document.getElementById("moon");
    if (reloading === "enabled") {
        console.log(reloading);
        icon.classList.remove("fa-solid");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-solid")
        icon.classList.add("fa-sun")
    }
}