# Shopping Cart !

Takes in a list of items (cart), and will list subtotal, total, tax, amount of items (output)

# Data structures

## Item

Object, price, name, id, icon

```jsx
const itemObj = {
  id: 1,
  name: "Potato",
  icon: "🥔",
  price: 1.99,
};

// const itemArr = [1, "potato", "🥔", 2];

// itemObj.price

// itemArr[2]
```

## Cart

Object vs Array ?

```jsx
const cartArr = [item, item, item];

// const cartObj = {
//   1: item,
//   2: item,
// };

// Object.values(cartObj)
```

Every item in my array or object is the same type

## Output

subtotal, total, tax, amount of items

```jsx
// const outputArr = [9.99, 11.48, 1.49, 5];

const outputObj = {
  subtotal: 9.99,
  total: 11.48,
  taxAmount: 1.49,
  amountOfItems: 5,
};
```

## Function Flow

IN: Array of item objects, they should all have the necessary info to calculate the subtotal and others

1. create the output object
2. calculate the amount of items, then put in output object
3. calculate the subtotal, then put in output object
   1. calculate the amount of tax, then put in output object
   2. calculate the total, then put in output object
4. return the output object

OUT: Happy object

2. calculate the amount of items

```jsx
let amountOfItems = 0;
for (let i = 0; i < cart.length; i++) {
  amountOfItems++;
}

let amountOfItems = cart.length;
```

## What if?

### Something goes wrong

- Price is valid (Not negative, not not a number)
- Missing important values
<!-- - Name could be something else -->
- Item is not an object
- We don't provide a cart at all
  <!-- - Out of stock -->
  <!-- - Duplicate ids -->

### Something goes right

- We output every value as a number
- Output an object with the relevant keys
