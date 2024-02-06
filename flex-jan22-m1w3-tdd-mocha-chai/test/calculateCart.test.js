const calculateCart = require("../calculateCart");
const chai = require("chai");

const expect = chai.expect;

describe("What could go wrong", () => {
  it("should skip the item when price is invalid", () => {
    const cart = [
      {
        id: 1,
        name: "Potato",
        icon: "🥔",
        price: NaN,
      },
      {
        id: 1,
        name: "Potato",
        icon: "🥔",
        price: 1.99,
      },
    ];

    const actualAmountOfItems = calculateCart(cart).amountOfItems;
    const expectedAmountOfItems = 1;

    expect(actualAmountOfItems).to.equal(expectedAmountOfItems);
  });
  it("should skip the item if the item is missing values", () => {
    const cart = [
      {
        id: 1,
        name: "Potato",
        icon: "🥔",
      },
      {
        id: 1,
        name: "Potato",
        price: 1.99,
      },
    ];

    const actualAmountOfItems = calculateCart(cart).amountOfItems;
    const expectedAmountOfItems = 0;

    expect(actualAmountOfItems).to.equal(expectedAmountOfItems);
  });
  it("should skip the item if the item is not an object", () => {
    const cart = [
      "🍠",
      {
        id: 1,
        name: "Potato",
        icon: "🥔",
        price: 1.99,
      },
    ];

    const actualAmountOfItems = calculateCart(cart).amountOfItems;
    const expectedAmountOfItems = 1;

    expect(actualAmountOfItems).to.equal(expectedAmountOfItems);
  });
  it("should be super mad (throw) when we don't provide a cart", () => {
    const cart = undefined;

    const throwyFunction = () => calculateCart(cart);
    const expectedErrorMessage = "PUT A CART YOU DUM DUM.";

    expect(throwyFunction).to.throw(expectedErrorMessage);
  });
});

describe("What could go right", () => {
  it("should output a valid object", () => {
    const cart = [
      {
        id: 1,
        name: "Potato",
        icon: "🥔",
        price: 0.99,
      },
      {
        id: 2,
        name: "Strawberries",
        icon: "🍓",
        price: 9.99,
      },
    ];

    const expectedOutput = {
      subtotal: 10.98,
      total: 12.62,
      taxAmount: 1.64,
      amountOfItems: 2,
    };

    const actualOutput = calculateCart(cart);

    expect(expectedOutput).to.deep.equal(actualOutput);
  });
});
