const TAXAMOUNT = 0.14975;

const roundPrice = (price) => Math.round(price * 100) / 100;

const checkIfValidKeys = (item) => {
  const validKeys = ["id", "name", "icon", "price"];
  const itemKeys = Object.keys(item);

  for (const key of validKeys) {
    if (!itemKeys.includes(key)) {
      return false;
    }
  }

  return true;
};

const calculateCart = (cart) => {
  if (!Array.isArray(cart)) {
    throw new Error("PUT A CART YOU DUM DUM.");
  }

  const output = {
    subtotal: 0,
    amountOfItems: 0,
  };

  // output.amountOfItems = cart.length;

  for (const item of cart) {
    const validPrice = typeof item.price === "number" && item.price >= 0;
    const validItem = checkIfValidKeys(item);

    if (validPrice && validItem) {
      output.subtotal += item.price;
      output.amountOfItems++;
    }
  }

  output.taxAmount = roundPrice(output.subtotal * TAXAMOUNT);

  output.total = roundPrice(output.taxAmount + output.subtotal);

  return output;
};

module.exports = calculateCart;
