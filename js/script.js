// Created by: Grace S
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict";

function displayCost() {
  
  // Constants
  const HST = 0.13;
  const TOPPING_PRICE = 0.60;
  const SINGLE = 3.76;
  const SIX_PACK = 20.00;
  const TWELVE_PACK = 36.00;
  const SODA_COST = 4.00;
  const JUICE_COST = 3.00;
  const COF_COST = 4.50;
  const MINI_COST = 32.00;
  const FRUIT_COST = 6.00;
  
  // Iniatializing Variable
  let sizeCost = 0;
  let drinkCost = 0;

  // Getting interger value from mini doughnuts and fruit salad 
  let numMini = parseInt(document.getElementById("mini").value);
  let numFruit = parseInt(document.getElementById("fruit").value);

  // Find the input for Size 
  // Code from: https://www.willmaster.com/library/manage-forms/instant-action-when-dropdown-selection-is-made.php
  let sizeSelection = document.getElementById('size');
	let size = sizeSelection.options[sizeSelection.selectedIndex].value;

  // Find the user input for Flavour of doughnut
  // Code from: https://www.willmaster.com/library/manage-forms/instant-action-when-dropdown-selection-is-made.php
  let flavourSelection = document.getElementById('flavour');
	let flavour = flavourSelection.options[flavourSelection.selectedIndex].value;

  // Find the toppings cost through number of checkboxes selected
  // Code from: https://www.techiedelight.com/count-number-check-boxes-javascript/
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let numToppings = checkboxes.length;

  // Determining the cost of the toppings from number of checkboxes selected
  let costToppings = numToppings * TOPPING_PRICE;

   // Get value from Drink Selection
   // Code from: https://stackoverflow.com/questions/71288407/document-queryselectorinputname-nameofradiochecked-value-but-radio-not-c
  let drink = document.querySelector('input[name="drink"]:checked').value;
  
  // if statement for size cost
  if (size == "small") {
    sizeCost = SINGLE
  } else if (size == "medium") {
    sizeCost = SIX_PACK
  } else {
    sizeCost = TWELVE_PACK
  } 


  // if statement for cost of drink
  if ((drink == "pepsi") || (drink == "Fresca")) {
    drinkCost = SODA_COST
    
  } else if (drink == "Juice") {
    drinkCost = JUICE_COST
    
  } else if (drink == "Coffee") {
    drinkCost = COF_COST
   } else {
    drinkCost = 0
   }

  // Let statement for Cost of Mini Doughnuts
  let costMini = numMini * MINI_COST;

  // Let statement for Cost of Fruit Salad
  let costFruit = numFruit * FRUIT_COST;

  // Let statements for subtotal, tax and total cost
  let subtotal = sizeCost + costToppings + drinkCost + costMini + costFruit
  let tax = subtotal * HST;
  let total = subtotal + tax;


  // Displaying the results to the user screen
    document.getElementById("subtotal").innerHTML = "Your subtotal is $" + subtotal.toFixed(2)
    document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
    document.getElementById("total").innerHTML = "Your total is $" + total.toFixed(2)
    document.getElementById("message").innerHTML = "Enjoy your " + flavour.toUpperCase()  + " flavoured doughnut!"
}