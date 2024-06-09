import { content } from "./homePage";

const showAboutUs = () => {
    //clearing content
    content.replaceChildren();

    const storyText = document.createElement("div");
    const storyHeading = document.createElement("h1");

    storyText.classList.add("story-text");
    storyHeading.classList.add("story-heading");

    storyHeading.textContent = "Our Story"
    storyText.textContent = "At Odiano, we believe that every meal should be an experience—a journey through the rich culinary heritage of Italy. Our story begins in the heart of Tuscany, where our founder, Nonna Maria, perfected her family recipes over generations. From the sun-kissed vineyards of Chianti to the bustling markets of Rome, our dishes are a celebration of tradition, love, and authenticity."
    
    content.appendChild(storyHeading);
    content.appendChild(storyText);
};

export default showAboutUs;