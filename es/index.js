"use strict";

// HEADER - header scroll efect

const header = document.getElementById("header");

document.addEventListener("scroll", ()=> {
    let winScroll = window.scrollY;
    if (winScroll > 0) {
        header.classList.add("header-scroll");
    } else if (menu.classList.contains("menu-visible")) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
})

// HEADER - button menu and menu efect

const toggleMenu = document.getElementById("btn-menu");

const menu = document.querySelector(".nav_ul-mobile");

const main = document.getElementById("main");

const menuLinks = document.querySelectorAll(".ul-mobile__link");

const closeMenu = () => {
    menu.classList.remove("menu-visible");
    menu.classList.add("menu-not-visible");
    toggleMenu.classList.remove("active");
}

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-visible");
    toggleMenu.classList.toggle("active");
    menu.classList.remove("menu-not-visible");
    if (menu.classList.contains("menu-visible")) {
        header.classList.add("header-scroll")
        // Mouse when "click" main, menu close
        main.addEventListener("click", closeMenu);
        // Mouse when "click" an option, menu close
        menuLinks.forEach((link) => {
            link.addEventListener("click", closeMenu)
        })
        return;
    } else {
        menu.classList.add("menu-not-visible");
    }
    if (menu.classList.contains("menu-not-visible") && (window.scrollY === 0)) {
        header.classList.remove("header-scroll");
        return;
    }
});

// HEADER - button language 

const toggleLang = document.getElementById("btn-language");

const menuLang = document.querySelector(".language_ul");

const menuLangLinks = document.querySelectorAll(".language__li-link");

toggleLang.addEventListener("click", () => {
    menuLang.classList.toggle("visible");
    toggleLang.classList.toggle("active");
    if (menuLang.classList.contains("visible")) {
        // Mouse when "click" an option in lang menu, menu close
        menuLangLinks.forEach((link) => {
            link.addEventListener("click", () => {
                menu.classList.remove("menu-visible");
                menu.classList.add("menu-not-visible");
                toggleMenu.classList.remove("active");
                menuLang.classList.remove("visible");
                toggleLang.classList.remove("active");
            })
        })
    }
});

// HEADER - button theme mode

const toggleTheme = document.getElementById("btn-theme");

const themeText = document.querySelector(".theme_text");

const themeBulb = document.querySelector(".theme_img");

const bodyElement = document.querySelector(".body");

const changeTheme = (from, to, turn, text) => {
    bodyElement.classList.remove(`${from}`);
    bodyElement.classList.add(`${to}`);
    themeText.textContent = `${text}`;
    themeBulb.setAttribute("alt",`Bulb ${turn}`);
}

toggleTheme.addEventListener("click", function () {
    if (bodyElement.classList.contains("dark")) {
        changeTheme("dark","light","on","Light");
        return;
    }
    if (bodyElement.classList.contains("light")) {
        changeTheme("light","dark","off","Dark");
        return;
    }
});

// HEADER - efect for links "linkes" to sections

const sections = document.querySelectorAll(".section");

let currentSection = "home";

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        if (window.scrollY >= (section.offsetTop - section.clientHeight / 4)) {
            currentSection = section.id;
        } else if (window.scrollY === 0) {
            currentSection = "home"
        }
    });
    menuLinks.forEach((link) => {
        if (link.href.includes(currentSection)) {
            document.querySelector(".active-link").classList.remove("active-link");
            link.classList.add("active-link");
        }
    })
})

// PROJECTS - change src of imgs

const projectImages = document.querySelectorAll(".card_img");

const mobileMedia = window.matchMedia("(width <= 340px)");

const tabletMedia = window.matchMedia("(width >= 768px)");

const desktopMedia = window.matchMedia("(width >= 1024px)");

const changeImages = (media, img) => {
    if (media.matches) {
        projectImages[0].setAttribute("src",`../assets/economipedia${img}.webp`);
        projectImages[1].setAttribute("src",`../assets/toolPage${img}.webp`);
        projectImages[2].setAttribute("src",`../assets/loginPage${img}.webp`);
        projectImages[3].setAttribute("src",`../assets/monsterEnergy${img}.webp`);
    }
}

changeImages(mobileMedia,"");
changeImages(tabletMedia,"Tablet");
changeImages(desktopMedia,"");