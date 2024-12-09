// var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);
// db.transaction(function (transaction) {
//   // here be the transaction
//   // do SQL magic here using the tx object
// });

// const sqlite3 = require('sqlite3').verbose();
    
// const db = new sqlite3.Database('yourdatabase.db', (err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log('Connected to the SQLite database.');
//   }
// });

// Function to calculate cost
// function calculateCost() {
//   var quantity = parseFloat(document.getElementById("quant").value) || 0;
//   var price = parseFloat(document.getElementById("price").value) || 0;
//   var cost = quantity * price;
//   document.getElementById("cost").innerHTML = cost.toFixed(2);
// }

// Attach event listeners for real-time updates
document.getElementById("quant").addEventListener("input", calculateCost);
document.getElementById("price").addEventListener("input", calculateCost);

var i = 0;



function duplicate() {

  const newItem = document.createElement("div");
  newItem.className = "item"; // Add the same class as the original item

  // Create individual input fields
  const nameInput = document.createElement("input");
  nameInput.className = "name";
  nameInput.type = "text";
  nameInput.placeholder = "Item Name";

  const yesNoInput = document.createElement("input");
  yesNoInput.className = "yesno";
  yesNoInput.type = "checkbox";

  const quantInput = document.createElement("input");
  quantInput.className = "quant";
  quantInput.type = "number";
  quantInput.placeholder = "Quantity";

  const priceInput = document.createElement("input");
  priceInput.className = "price";
  priceInput.type = "number";
  priceInput.placeholder = "Price";

  const costDisplay = document.createElement("h4");
  costDisplay.innerHTML = 'Rs. <span class="cost">0.00</span>';

  // Append inputs to the new div
  newItem.appendChild(nameInput);
  newItem.appendChild(yesNoInput);
  newItem.appendChild(quantInput);
  newItem.appendChild(priceInput);
  newItem.appendChild(costDisplay);

  // Attach real-time cost calculation to the new inputs
  quantInput.addEventListener("input", calculateCost);
  priceInput.addEventListener("input", calculateCost);

  // Insert the new item above the "Add item" button
  const addItemButton = document.getElementById("add-item");
  addItemButton.insertAdjacentElement("beforebegin", newItem);

    // var original = document.getElementById('item' + i);
    // var clone = original.cloneNode(true); // "deep" clone
    // clone.id = "item" + ++i; // there can only be one element with an ID
    // clone.onclick = duplicate; // event handlers are not cloned
    // original.parentNode.appendChild(clone);
  }

function calculateCost() {
    const parent = this.closest(".item"); // Get the parent .item div
    const quantity = parseFloat(parent.querySelector(".quant").value) || 0;
    const price = parseFloat(parent.querySelector(".price").value) || 0;
    const cost = quantity * price;
    parent.querySelector(".cost").innerHTML = cost.toFixed(2);
  }

document.getElementById("add-item").addEventListener("click", duplicate);

// Function to calculate cost for a single item
function calculateCost() {
  const parent = this.closest(".item"); // Get the parent .item div
  const quantity = parseFloat(parent.querySelector(".quant").value) || 0;
  const price = parseFloat(parent.querySelector(".price").value) || 0;
  const cost = quantity * price;
  parent.querySelector(".cost").innerHTML = cost.toFixed(2);

  // Recalculate total after updating this item's cost
  calculateTotal();
}

// Function to calculate the total cost
function calculateTotal() {
  let total = 0;

  // Loop through all the cost spans in the .item divs
  const costSpans = document.querySelectorAll(".item .cost");
  costSpans.forEach(costSpan => {
    total += parseFloat(costSpan.textContent) || 0;
  });

  // Update the total display
  document.querySelector(".total").innerHTML = total.toFixed(2);
}

// Function to duplicate a new item row
function duplicate() {
  // Create a new div for the cloned inputs
  const newItem = document.createElement("div");
  newItem.className = "item"; // Add the same class as the original item

  // Create individual input fields
  const nameInput = document.createElement("input");
  nameInput.className = "name";
  nameInput.type = "text";
  nameInput.placeholder = "Item Name";

  const yesNoInput = document.createElement("input");
  yesNoInput.className = "yesno";
  yesNoInput.type = "checkbox";

  const quantInput = document.createElement("input");
  quantInput.className = "quant";
  quantInput.type = "number";
  quantInput.placeholder = "Quantity";

  const priceInput = document.createElement("input");
  priceInput.className = "price";
  priceInput.type = "number";
  priceInput.placeholder = "Price";

  const costDisplay = document.createElement("h4");
  costDisplay.innerHTML = 'Rs. <span class="cost">0.00</span>';

  // Append inputs to the new div
  newItem.appendChild(nameInput);
  newItem.appendChild(yesNoInput);
  newItem.appendChild(quantInput);
  newItem.appendChild(priceInput);
  newItem.appendChild(costDisplay);

  // Attach real-time cost calculation to the new inputs
  quantInput.addEventListener("input", calculateCost);
  priceInput.addEventListener("input", calculateCost);

  // Insert the new item above the "Add item" button
  const addItemButton = document.getElementById("add-item");
  addItemButton.insertAdjacentElement("beforebegin", newItem);
}

// Attach event listener to the Add Item button
document.getElementById("add-item").addEventListener("click", duplicate);

// Attach real-time calculation for the initial row
document.querySelector(".quant").addEventListener("input", calculateCost);
document.querySelector(".price").addEventListener("input", calculateCost);

