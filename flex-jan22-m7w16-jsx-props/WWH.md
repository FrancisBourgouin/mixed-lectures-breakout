# What was hard?

- Time Management
- App Flow
- API stuff tricky!

# Why React ? Why not more jQuery

PHP => Laravel / WordPress

PHP => Express + EJS
jQuery / JS => Add interactivity and reload-less interactions


# JSX !

```jsx
  ReactDOM.createElement("button", ...)


  <button className="" onClick>Hello!</button>
```


# Functions, parameters, properties, etc!

```jsx
  const addTwoNumbers = (num1, num2) => num1 + num2

  const addUser = (name, email, password, isAdmin, description, avatarUrl) => {
    // Order is important, and it's even more annoying if we have to skip values
  }

  addUser("Francis", null, "Super secret password of darkness and destiny", true, null, null)

  const addUserButBetter = (userInfo) => {
    userInfo.name ..
    const {name, email, ...} = userInfo
  }

  addUserButBetter({name:"Francis", isAdmin:true, password:"1234"})
```

# HTML tags and their properties

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