# Recap!

# React

Frontend framebrary to generative *reactive* interfaces using JSX language!

# JSX

Smells like HTML
Tastes like HTML
Looks like HTML

But it's not HTML! Mix of JavaScript and XML

# Conditional Rendering using Ternary operators or Short Circuit operators

```jsx
  false && <button>Hello!</button> // That will not show

  <Link>{user ? "logout" : "login"}</Link> // Ternary operator to choose between options
```

# Props!

Like HTML tags have properties and values attached to them

```html
  <a href="/urls" class="link" id="urls" target="_blank">Link name!</a>

  Properties of the link above are:
  href = /urls
  class = link
  id = urls
  target = _blank

  {
    href:"/urls",
    class:"link",
    id:"urls",
    target:"_blank"
  }
```

```jsx
  <PlantListItem
    key={plant.id}
    name={plant.name}
    type={plant.type}
    lastWatered={plant.lastWatered}
    wateringInterval={plant.wateringInterval}
  />

  OR

  <PlantListItem {...plant} >
```

# React Component has two parts, calculation/processing and returning

```jsx
  function SomeComponent(props){
    // Processing / Calculation done before the return
    const user = "Bob"


    // Output is generated in the return
    return(
      <h1>Some title! Hello {user}</h1>

    )
  }
```