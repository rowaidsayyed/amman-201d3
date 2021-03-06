/* global Product, Cart */

'use strict';
var cartDiv = document.getElementById('cartContents');
var ulEl = document.createElement('ul');
cartDiv.appendChild(ulEl);
var count =0;
// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optEl = document.createElement('option')
    selectElement.appendChild(optEl);
    optEl.textContent = Product.allProducts[i].name;

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  document.getElementById('catalog').reset();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  cart.addItem(document.getElementById('items').value,document.getElementById('quantity').value); 
  // console.log('hgghh',cart);
  
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var countspan = document.getElementById('itemCount');
  count++;
  countspan.textContent = count ;
  
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var liEl = document.createElement('li');
  ulEl.appendChild(liEl);
  liEl.textContent = `${document.getElementById('items').value} ordered ${document.getElementById('quantity').value}`;
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
