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

//Buttons for portfolio carousel

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]');
        const activeSlide = slides.querySelector("[data-active]");

        let newIndex = [...slides.children].indexOf(activeSlide)+offset;
        if(newIndex<0) newIndex = slides.children.length - 1
        if(newIndex>=slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
    } )
})