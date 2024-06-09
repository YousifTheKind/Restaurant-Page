import backgroundImage from '../assests/images/klara-kulikova-WcV2YkM3Dls-unsplash.jpg'
import logoPic from '../assests/images/logo.png'
const content = document.querySelector("#content");

// function that creates the initial page-load
const createHomepage = () => {
    //clearing content
    content.replaceChildren()
    const background = new Image();
    const headline = document.createElement("h1");
    const tagline = document.createElement("p");
    const textContainer = document.createElement("div")

    background.src = backgroundImage;
    background.classList.add("bg-image")
    headline.classList.add("head-line");
    tagline.classList.add("tag-line");
    textContainer.classList.add("text-container");

    headline.textContent = "Authentic Italian experience";
    tagline.textContent = "A place where people connect through unforgettable dining experiences";
    
    textContainer.append(headline, tagline);
    content.appendChild(background);
    content.appendChild(textContainer);

};

// logo
const addLogo = () => {
    const header = document.querySelector("header");
    const logo = new Image();
    logo.src = logoPic;

    logo.classList.add("logo");

    header.insertBefore(logo, header.firstChild);
};


export {createHomepage, addLogo, content};