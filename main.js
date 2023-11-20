"use strict";

// Coffee data
// Try to load coffees from local storage or set to default if not present
const coffees = JSON.parse(localStorage.getItem('coffees')) || [
    // ... (existing array of coffees)
    { id: 1, name: 'Cool Story Brew', roast: 'light' },
    { id: 2, name: 'Lighthearted latte', roast: 'light' },
    { id: 3, name: 'BrewHaha Blend', roast: 'light' },
    { id: 4, name: 'Sip Happens', roast: 'medium' },
    { id: 5, name: 'Amused Americano', roast: 'medium' },
    { id: 6, name: 'Mocha Madness', roast: 'medium' },
    { id: 7, name: 'Espresso Euphoria', roast: 'dark' },
    { id: 8, name: 'Morbidly Rich Roast', roast: 'dark' },
    { id: 9, name: 'Mourning Mocha', roast: 'dark' },
    { id: 10, name: 'Brewed Awakening', roast: 'dark' },
    { id: 11, name: 'Sip Happens', roast: 'dark' },
    { id: 12, name: 'Mocha Madness', roast: 'dark' },
    { id: 13, name: 'Wicked Wake Up', roast: 'dark' },
    { id: 14, name: 'Cynical Cappuccino', roast: 'dark' },
];

// Function to render a coffee as a div
function renderCoffee(coffee) {
    return `
<!--coffee card-->
        <div class="col-xs-12 col-sm-12 col-xl-4 col-lg-6 col-md-6 mb-4">
            <div class="card h-100">
                <img class="card-img-top" src="../img/coffee.webp" alt="${coffee.name}">
                <div class="card-body">
                    <h3 class="card-title">${coffee.name}</h3>
                    <p class="card-text">${coffee.roast}</p>
                </div>
            </div>
        </div>
    `;
}

// Function to render a list of coffees
function renderCoffees(coffees) {
    return coffees.map(renderCoffee).join('');
}

// Function to update displayed coffees based on roast selection
function updateCoffees() {
    const selectedRoast = roastSelection.value;
    const searchTerm = searchInput.value.toLowerCase();

    const filteredCoffees = coffees.filter(coffee => {
        const coffeeName = coffee.name.toLowerCase();
        const coffeeRoast = coffee.roast.toLowerCase();

        // Check if the coffee name contains the search term and matches the selected roast
        return coffeeName.includes(searchTerm) && (selectedRoast === 'all' || coffeeRoast === selectedRoast);
    });

    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

// HTML elements
const coffeeList = document.querySelector('#coffee-list');
const searchInput = document.querySelector('#search');
const roastSelection = document.querySelector('#roast-selection');
const addCoffeeForm = document.querySelector('#add-coffee-form');

// Initial rendering of coffees
coffeeList.innerHTML = renderCoffees(coffees);

// Event listeners
roastSelection.addEventListener('change', updateCoffees);
searchInput.addEventListener('input', updateCoffees);

// Function to add a new coffee to the list
// Modify the addCoffee function to save the updated array to local storage
function addCoffee(name, roast) {
    const newCoffee = {
        id: coffees.length + 1,
        name,
        roast,
    };
    coffees.push(newCoffee);
    updateLocalStorage(); // Save the new array to local storage
    coffeeList.innerHTML = renderCoffees(coffees);
    addCoffeeForm.reset();
}
function updateLocalStorage() {
    localStorage.setItem('coffees', JSON.stringify(coffees));
}
updateLocalStorage();
// clear storage
// localStorage.clear()

// Event listener for the add coffee form submission
addCoffeeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const coffeeName = addCoffeeForm.querySelector('#coffee-name').value;
    const coffeeRoast = addCoffeeForm.querySelector('#coffee-roast').value;
    if (coffeeName && coffeeRoast) {
        addCoffee(coffeeName, coffeeRoast);
    }
});

// Initialize the roast selection with all
roastSelection.value = 'all';



function updateFontColor() {
    // Get all elements containing text
    const textElements = document.querySelectorAll('*:not(script):not(style):not(link):not(meta)'); // Exclude certain elements like scripts, styles, links, and meta tags

    // Loop through the text elements and update font color
    textElements.forEach(element => {
        element.style.color = '#f5f5f5';
    });
}

// Call the function to update font color
updateFontColor();

// Select all headings and titles you want to style with Dancing Script
const headingsAndTitles = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .title-class, .other-title-class');

// Apply the "Dancing Script" font to the selected elements
headingsAndTitles.forEach(element => {
    element.style.fontFamily = 'Dancing Script, cursive';
});



