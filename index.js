var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randNum = Math.round(Math.random() * 100);
  var newItem = {"itemName": item, "itemPrice": randNum};
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  for (let i = 0; i < cart.length; i++) {
    
  }
}

function total() {
  var totalValue = 0;
  for (let i = 0; i < cart.length; i++) {
    totalValue += cart[i]["itemPrice"];
  }
  return totalValue;
}

function removeFromCart(item) {
  var removeIndex = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i]["itemName"] === item) {
      removeIndex = cart.indexOf(cart[i]);
      console.log(removeIndex);
    }
  }
  for (let i = 0; i < removeIndex.length; i++) {
    cart.splice(removeIndex[i], 1);
    console.log(removeIndex[i]);
  }
  return item;
}

function placeOrder(cardNumber) {
  var cartTotal = total();
  if (cardNumber > 0) {
      cart = [];
      return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
    } else {
      return "Sorry, we don\'t have a credit card on file for you.";
    }
}
