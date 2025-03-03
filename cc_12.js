//Task 1 - Created Revenue Metric Card
const dashboard = document.getElementById("dashboard"); //Use both document.getElementById
const dashboardSelector = document.querySelector('#dashboard'); //and document.querySelector to select the dashboard container.

function createMetricCard(id, title, initvalue) { //Making card creation repeatable through a function
    let card = document.createElement("div"); //Create a new <div> element using createElement to represent the metric card.
    card.setAttribute("class","metric-card"); //Use setAttribute to assign a class (e.g., "metric-card")
    card.setAttribute("id",id); //and an id (e.g., "revenueCard") to the new element.
    card.innerHTML = `<h3>${title}</h3><p>$${initvalue}</p>`; //Populate the card with a title ("Revenue") and a placeholder value (e.g., "$0").
    dashboard.appendChild(card); //Append the new metric card to the dashboard container using appendChild.    
};

createMetricCard("revenueCard", "Revenue", 0); //Invoking our createMetricCard() for the Revenue Card

//Task 2 - Updated Metric Cards via Array Conversion
createMetricCard("profitCard", "Profit", 0); //Repeating this process
createMetricCard("expensesCard", "Expenses", 0); //"Your dashboard now includes multiple metric cards (e.g., Revenue, Profit, Expenses)."

const metricCardList = document.querySelectorAll(".metric-card"); //Use document.querySelectorAll to select all elements with the class "metric-card".
const metricCardArray = Array.from(metricCardList); //Convert the resulting NodeList into an array (using Array.from).

metricCardArray.forEach(card => { //Use an array method such as .forEach()
    card.innerHTML += "<p><i> - Updated</i></p>"; //to update each card’s inner text
    card.style.backgroundColor = "greenyellow"; //or to modify their styles.
});

//Task 3 - Implemented Dynamic Inventory List
const inventoryList = document.getElementById("inventoryList");

function addInventoryItem(product) { //Write a function that creates a...
    let newLi = document.createElement("li"); //new <li> element representing a product
    newLi.setAttribute("class","product-item"); //Use setAttribute to add a class (e.g., "product-item")
    newLi.setAttribute("dataset",product); //or a custom data attribute to the <li>.
    newLi.addEventListener("click", () => {removeInventoryItem(newLi)}); //Adding an event listener to call removeInventoryItem function when clicked
    newLi.textContent = product; //Filling in text content from product
    inventoryList.appendChild(newLi); //Append the new product item to the inventory list using appendChild.
};

addInventoryItem("Click me"); //Testing addInventoryItem
addInventoryItem("Add a product below"); //Testing addInventoryItem

let productForm = document.getElementById('productForm');
let error = document.getElementById('error');

productForm.addEventListener('submit', (event) => { //Adding an event listener for a click of the submit button
    let productName = document.getElementById('productName').value; //Storing the content of the productName text input
    if (productName.trim() === '') { //Checking if the input is empty
        error.textContent = 'Product name is required'; //Error message
        event.preventDefault(); // Prevent form submission
    } else {
        error.textContent = '';
        addInventoryItem(productName); //Calling addInventoryItem()
        event.preventDefault(); // Prevent form submission
    }
});

function removeInventoryItem(item) { //Write a seperate function that removes a specific <li> when it is clicked
    inventoryList.removeChild(item); //Use removeChild within the inventory list to remove the clicked item.
};

//Task 4 - Demonstrated Event Bubbling in Customer Section
const customerCards = document.querySelectorAll(".customer-card"); //using querySelectorAll to select all elements with the class customer cards
const customerSection = document.getElementById("customerSection"); //using getElementById to get the parent container

customerCards.forEach(card => { //Looping through customerCards array
    card.addEventListener("click", (event) => { //Attach click event listeners to each customer card.
        console.log(`User clicked ${event.target.textContent}`); //In the customer card's click event handler, log a message
        event.stopPropagation(); //call stopPropagation() so that the parent's event handler does not trigger
    });    
});

customerSection.addEventListener("click", () => { //Attach click event listener to the parent container card.
    console.log(`User clicked customerSection`); //Logs a message
});    