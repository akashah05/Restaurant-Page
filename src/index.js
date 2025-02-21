import "./style.css";
import { createHomeContent } from "./home";
import { createMenuContent } from "./menu";
import { createAboutContent } from "./about";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");
const navBtns = document.querySelectorAll(".btn");

createHomeContent();

navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        content.textContent = "";

        if (btn.classList.contains("homeBtn")) {
            createHomeContent();
        } else if (btn.classList.contains("menuBtn")) {
            createMenuContent();
        } else if (btn.classList.contains("aboutBtn")) {
            createAboutContent();
        }
    });
});