import breakfastPic from '../assests/images/calum-lewis-rPkgYDh2bmo-unsplash.jpg'
import pizzaPic from '../assests/images/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg'
import pastaPic from '../assests/images/pixzolo-photography--O3wkh2jZyo-unsplash.jpg'

let breakfastDescription = "Eggs of your choice, tuscan potatoes, grilled tomato, beef bacon, baked beans, side of Focaccia bread, butter and jam, orange juice, a choice of hot drink. Egg Options: Sunny side up, poached, scrambled"
let pizzaDescription = "Shredded chicken breast, oven dried tomatoes, roasted red capsicums, perinaise"
let pastaDescription= "Slow-roasted Angus Beef Ragu, cooked with garlic, cherry tomatoes, roasted zucchini, roasted eggplant, carrots, celery, fresh thyme, mushrooms and parmesan cheese, tossed with penne pasta"

const myMenu = [];

// takes in three strings and creates an object and pushes it into myMenu
const generateMenuItem = (name, descritpion, photo) => {
    const item = {
        name,
        descritpion,
        photoURL: photo
    };

    myMenu.push(item)
};

// function that creates the DOM elements for the menu page
const showMenu = () => {
    //clearing content
    content.replaceChildren()
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container")
    for (let i = 0; i < myMenu.length; i++) {
        const menuItem = document.createElement("div");
        const itemName = document.createElement("span");
        const itemDescription = document.createElement("p");
        const itemPhoto = document.createElement("img");

        itemName.textContent = myMenu[i].name;
        itemDescription.textContent = myMenu[i].descritpion;
        itemPhoto.src = myMenu[i].photoURL;

        menuItem.append(itemPhoto, itemName, itemDescription);
        menuItem.classList.add("item", `i-${i}`);

        menuContainer.appendChild(menuItem);
        content.appendChild(menuContainer)
    }
};

generateMenuItem("ODIANO BREAKFAST", breakfastDescription, breakfastPic);
generateMenuItem("ODIANO PIZZA", pizzaDescription, pizzaPic);
generateMenuItem("ODIANO PASTA", pastaDescription, pastaPic);


export default showMenu;