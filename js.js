/////First try on dark mode/////
// function darkMode(){
//     const moon = document.body;
//     moon.classList.toggle("dark-mode");
// }

/////Second try on dark mode/////
// const bodyBg = "#000000";
// const fontColorDark="#EEEEEE";
// const backgroundDivs="#424242";
// const socialBtn="#BDBDBD";

/////Third try on dark mode/////
const moonBtn = document.querySelector(".fa-moon");
moonBtn.addEventListener("click", ()=>{
    document.querySelector("body").classList.toggle("dark");
        document.getElementById("moon").classList.remove("fa-solid");
        document.getElementById("moon").classList.remove("fa-moon");
        document.getElementById("moon").classList.remove("fa-2xl");
        document.getElementById("moon").classList.remove("p-1");
        document.getElementById("moon").classList.add("fa-solid");
        document.getElementById("moon").classList.add("fa-sun");
        document.getElementById("moon").classList.add("fa-2xl");
        document.getElementById("moon").classList.add("p-1");
    




// document.querySelector("body").style.backgroundColor=bodyBg;
// //header style
// document.querySelector(".header").style.backgroundColor=backgroundDivs;
// document.querySelector(".navContainer").style.backgroundColor=backgroundDivs;
// document.querySelector(".nav-link1").style.color=fontColorDark;
// document.querySelector(".nav-link2").style.color=fontColorDark;
// document.querySelector(".nav-link3").style.color=fontColorDark;
// document.querySelector(".nav-link4").style.color=fontColorDark;
// //main section
// document.querySelector(".mainDiv").style.backgroundColor=backgroundDivs;
// document.querySelector(".textContainer").style.backgroundColor=backgroundDivs;
// document.querySelector(".socialMediaContainer").style.backgroundColor=backgroundDivs;
// document.querySelector(".contactBtn").style.backgroundColor=bodyBg;
// ////text style in main section
// document.querySelector("h1").style.color=fontColorDark;
// document.querySelector("p").style.color=fontColorDark;
// document.querySelector("h2").style.color=fontColorDark;
// document.querySelector(".anotherH2").style.color=fontColorDark;
// document.querySelector("h3").style.color=fontColorDark;
// document.querySelector("button").style.color=fontColorDark;
// ////img style
// document.querySelector("img").style.opacity=0.8;
// //second section
// document.querySelector(".secondContainer").style.backgroundColor=backgroundDivs;
});
