//Task 1 - Created Revenue Metric Card
const dashboard = document.getElementById("dashboard"); //Use both document.getElementById
const dashboardSelector = document.querySelector('#dashboard'); //and document.querySelector to select the dashboard container.
const revenueCard = document.createElement("div"); //Create a new <div> element using createElement to represent the metric card.

revenueCard.setAttribute("class","metric-card"); //Use setAttribute to assign a class (e.g., "metric-card")
revenueCard.setAttribute("id","revenueCard"); //and an id (e.g., "revenueCard") to the new element.
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>"; //Populate the card with a title ("Revenue") and a placeholder value (e.g., "$0").
dashboard.appendChild(revenueCard); //Append the new metric card to the dashboard container using appendChild.

//Task 2 - Updated Metric Cards via Array Conversion
const metricCardList = document.querySelectorAll(".metric-card"); //Use document.querySelectorAll to select all elements with the class "metric-card".
const metricCardArray = Array.from(metricCardList); //Convert the resulting NodeList into an array (using Array.from).

metricCardArray.forEach(card => { //Use an array method such as .forEach()
    card.innerHTML += "<p><i> - Updated</i></p>"; //to update each card’s inner text
    card.setAttribute("style", "background-color: greenyellow;"); //or to modify their styles.
});

//Task 3 - Implemented Dynamic Inventory List
const inventoryList = document.getElementById("inventoryList");

function addInventoryItem(product) { //Write a function that creates a...
    let newLi = document.createElement("li"); //new <li> element representing a product
    newLi.setAttribute("class","product-item"); //Use setAttribute to add a class (e.g., "product-item")
    newLi.setAttribute("id",product); //or a custom data attribute to the <li>.
    newLi.setAttribute("onclick",`removeInventoryItem("${product}")`); //Calling the removeInventoryItem function when clicked
    newLi.textContent = product; //Filling in text content from product
    inventoryList.appendChild(newLi); //Append the new product item to the inventory list using appendChild.
};

addInventoryItem("Click me"); //Testing addInventoryItem
addInventoryItem("Add a product below"); //Testing addInventoryItem

let productForm = document.getElementById('productForm');
let error = document.getElementById('error');

productForm.addEventListener('submit', (event) => { //Adding an event listener for a click of the submit button
    let productName = document.getElementById('productName').value; //Storing the content of the productName text input
    if (productName === '') { //Checking if the input is empty
        error.textContent = 'Product name is required'; //Error message
        event.preventDefault(); // Prevent form submission
    } else {
        error.textContent = '';
        addInventoryItem(productName); //Calling addInventoryItem()
        event.preventDefault(); // Prevent form submission
    }
});

function removeInventoryItem(id) { //function that removes a specific <li> when it is clicked
    let invItem = document.getElementById(id); //Setting the clicked item as invItem
    inventoryList.removeChild(invItem); //Use removeChild within the inventory list to remove the clicked item.
};

//Task 4 - Demonstrated Event Bubbling in Customer Section
const customerCards = document.getElementsByClassName("customer-card");
const customerSection = document.getElementById("customerSection");

Array.from(customerCards).forEach(card => {
    card.addEventListener("click", (event) => {
        console.log(`User clicked ${card.innerHTML}`);
        event.stopPropagation();
    });    
});

customerSection.addEventListener("click", (event) => {
    console.log(`User clicked customerSection`);
});    