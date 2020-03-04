/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
var d=table.rows; // for test 
function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tbodyy = (document.getElementsByTagName('tbody'))[0]; 
  tbodyy.innerHTML=" ";
  console.log('sa',d);
  
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tbodyy = (document.getElementsByTagName('tbody'))[0];
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for(let i = 0;i<cart.items.length;i++){
    var trEl = document.createElement('tr');
    tbodyy.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = 'X';
    tdEl.title = i;
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = cart.items[i].product;
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = cart.items[i].quantity;

  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  cart.removeItem(event.target.title);
  cart.saveToLocalStorage();
  clearCart();
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
