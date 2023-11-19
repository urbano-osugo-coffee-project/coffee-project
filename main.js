"use strict"

// function renderCoffee(coffee) {
//     let html = '<tr class="coffee">';
//     html += `<h1 style="font-family: AkayaTelivigala,sans-serif">${coffee.name}</h1>`;
//     html += `<p>${coffee.roast}</p>`;
//     return html;
// }

// function renderCoffees(coffees) {
//     let html = '';
//     for(let i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     const selectedRoast = roastSelection.value;
//     const filteredCoffees = [];
//     coffees.forEach( coffee => {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// const coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// const tbody = document.querySelector('#coffees');
// const submitButton = document.querySelector('#submit');
// const roastSelection = document.querySelector('#roast-selection');
//
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);


//----------------------------------------------------------------

//
"use strict";

// Coffee data
const coffees = [
    { id: 1, name: 'Light City', roast: 'light' },
    { id: 2, name: 'Half City', roast: 'light' },
    { id: 3, name: 'Cinnamon', roast: 'light' },
    { id: 4, name: 'City', roast: 'medium' },
    { id: 5, name: 'American', roast: 'medium' },
    { id: 6, name: 'Breakfast', roast: 'medium' },
    { id: 7, name: 'High', roast: 'dark' },
    { id: 8, name: 'Continental', roast: 'dark' },
    { id: 9, name: 'New Orleans', roast: 'dark' },
    { id: 10, name: 'European', roast: 'dark' },
    { id: 11, name: 'Espresso', roast: 'dark' },
    { id: 12, name: 'Viennese', roast: 'dark' },
    { id: 13, name: 'Italian', roast: 'dark' },
    { id: 14, name: 'French', roast: 'dark' },
];

// Function to render a coffee as a div
function renderCoffee(coffee) {
    return `
        <div class="coffee d-flex flex-row col-lg-6 mb-4">
            <h3>${coffee.name}</h3>
            <p>${coffee.roast}</p>
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
function addCoffee(name, roast) {
    const newCoffee = {
        id: coffees.length + 1,
        name,
        roast,
    };
    coffees.push(newCoffee);
    coffeeList.innerHTML = renderCoffees(coffees);
    addCoffeeForm.reset();
}

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

