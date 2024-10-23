/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const cherry = {
  name: "Cherry",
  price: 5.00,
  quantity: 0,
  productId: 456,
  image: "images/cherry.jpg"
};

const orange = {
  name: "Orange",
  price: 4.50,
  quantity: 0,
  productId: 692,
  image: "images/orange.jpg"
};

const strawberry = {
  name: "Strawberry",
  price: 7.50,
  quantity: 0,
  productId: 442,
  image: "images/strawberry.jpg"
};

products = [cherry, orange, strawberry];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let count = 0;
  for (let index = 0; index < products.length; index++) {
    if (products[index].productId === productId) {
      for (let cartIdx = 0; cartIdx < cart.length; cartIdx++) {
        if (cart[cartIdx].productId === productId) {
          count++;
          cart[cartIdx].quantity++;
        }
      }
      if (count == 0) {
        products[index].quantity++;
        cart.push(products[index]);
      }
    }
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  for (let cartIdx = 0; cartIdx < cart.length; cartIdx++) {
    if (cart[cartIdx].productId === productId) {
      cart[cartIdx].quantity++;
    }
  }  
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  for (let cartIdx = 0; cartIdx < cart.length; cartIdx++) {
    if (cart[cartIdx].productId === productId) {
      if (cart[cartIdx].quantity > 0) {
        cart[cartIdx].quantity -= 1;
      }
      if (cart[cartIdx].quantity ===0) {
        removeProductFromCart(cart[cartIdx].productId);
      }
    }
  }  
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  for (let cartIdx = 0; cartIdx < cart.length; cartIdx++) {
    if (cart[cartIdx].productId === productId) {
      cart[cartIdx].quantity = 0;
      cart.splice(cartIdx, 1);
    }
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
let totalPaid = 0.0; // Amount to be paid

function cartTotal() {
  let total = 0; 
  for (let cartIdx = 0; cartIdx < cart.length; cartIdx++) {
    total += cart[cartIdx].quantity * cart[cartIdx].price;
  }
  return total;
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  for (let cartIdx = 0; cartIdx < cart.length; cartIdx++) {
    cart[cartIdx]. quantity = 0;
    removeProductFromCart(cart[cartIdx].productId)
  }
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
  totalPaid += amount;
  const total = cartTotal();
  return totalPaid - total;
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}