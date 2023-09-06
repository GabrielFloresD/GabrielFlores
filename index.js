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

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-visible");
    toggleMenu.classList.toggle("active");
    menu.classList.remove("menu-not-visible");
    if (menu.classList.contains("menu-visible")) {
        header.classList.add("header-scroll");
        // Mouse when "click" main, menu close
        main.addEventListener("click", ()=> {
            menu.classList.remove("menu-visible");
            menu.classList.add("menu-not-visible");
            toggleMenu.classList.remove("active");
        });
    } else {
        menu.classList.add("menu-not-visible");
    }
});

// HEADER - button language 

const toggleLang = document.getElementById("btn-language");

const menuLang = document.querySelector(".language_ul");

toggleLang.addEventListener("click", () => {
    menuLang.classList.toggle("visible");
    toggleLang.classList.toggle("active");
});

// HEADER - button theme mode

const toggleTheme = document.getElementById("btn-theme");

const themeText = document.querySelector(".theme_text");

const bodyElement = document.querySelector(".body");

toggleTheme.addEventListener("click", ()=> {
    if (bodyElement.classList.contains("dark")) {
        bodyElement.classList.remove("dark");
        bodyElement.classList.add("light");
        themeText.textContent = "Light"
        return;
    }
    if (bodyElement.classList.contains("light")) {
        bodyElement.classList.remove("light");
        bodyElement.classList.add("dark");
        themeText.textContent = "Dark"
        return;
    }
})