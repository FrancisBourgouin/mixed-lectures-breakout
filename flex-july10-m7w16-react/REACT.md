## React, a library or framework ?

- Express: Framework
- jQuery: Library
- React: Library/Framework Framebrary

## JSX

```jsx
HTML: <h1 class="sponsored">Hello there!</h1>;
JSX: <h1 className="sponsored">Hello there!</h1>;
```

Feels like HTML, tastes like HTML but it's not HTML

Written like HTML but is actually JS behind the scenes

```jsx
<p>The sum of 1 + 2 is {1 + 2}</p>
```

```jsx
  ReactDOM.createElement('p', {...})
```

## Props

Properties that are passed down to the component

```jsx
const createUser = (firstName, lastName, email, password, isAdmin) => {
  // ...

  return newUser;
};

createUser("Little", "Chicken", "pock@pock.com", 1234, false);

createUser(undefined, undefined, "non@non.com", 1234, true);

$.ajax({});

const createUserV2 = (userProps) => {
  // ...

  return newUser;
};

createUserV2({ email: "yeah@yeah.com", isAdmin: true });
```

## State
