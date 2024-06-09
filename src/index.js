import './style.css';
import {createHomepage, addLogo} from './homePage';
import content from './homePage';
import showMenu from './menu';
import showAboutUs from './about';

addLogo();
createHomepage();

// event listner that creates the menu tab
document.querySelector(".menu").addEventListener("click", showMenu);

document.querySelector(".home").addEventListener("click", createHomepage);

document.querySelector(".about-us").addEventListener("click", showAboutUs);