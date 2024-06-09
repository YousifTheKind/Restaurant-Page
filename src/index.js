import './style.css';
import {createHomepage, addLogo} from './homePage';
import content from './homePage';
import showMenu from './menu';

addLogo();
createHomepage();

// event listner that creates the menu tab
document.querySelector(".menu").addEventListener("click", showMenu);
