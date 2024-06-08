import backgroundImage from '../assests/images/klara-kulikova-WcV2YkM3Dls-unsplash.jpg'

// function that creates the initial page-load
const createHomepage = () => {
    const content = document.querySelector("#content");
    const background = new Image();
    const headline = document.createElement("h1");
    const tagline = document.createElement("p");

    background.src = backgroundImage;
    background.classList.add("bg-image")
    headline.classList.add("head-line");
    tagline.classList.add("tag-line");

    headline.textContent = "Authentic Italian experience";
    tagline.textContent = "A place where people connect through unforgettable dining experiences";

    content.appendChild(background);
    content.appendChild(headline);
    content.appendChild(tagline);
};


export default createHomepage;