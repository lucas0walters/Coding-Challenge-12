//Task 1 - Created Revenue Metric Card
const dashboard = document.getElementById("dashboard"); //Use both document.getElementById
const dashboardSelector = document.querySelector('#dashboard'); //and document.querySelector to select the dashboard container.

const revenueCard = document.createElement("div"); //Create a new <div> element using createElement to represent the metric card.
revenueCard.setAttribute("class","metric-card"); //Use setAttribute to assign a class (e.g., "metric-card")
revenueCard.setAttribute("id","revenueCard"); //and an id (e.g., "revenueCard") to the new element.
revenueCard.textContent = "Revenue: $0"; //Populate the card with a title ("Revenue") and a placeholder value (e.g., "$0").
dashboard.appendChild(revenueCard); //Append the new metric card to the dashboard container using appendChild.

