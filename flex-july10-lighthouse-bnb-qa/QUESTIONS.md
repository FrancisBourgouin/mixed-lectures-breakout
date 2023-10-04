# QUESTIONS :D

- SQL life, not too bad

TinyApp => TinyURL
Tweeter => X
LightBnB => AirBnB
Jungle => Amazon

Mocking / Mock-up => Mocking someone (not nice)

```jsx
const users = {
  1:{},
  2:{},
}

const getAllUsers = () => {
  // return Object.values(users); // Returns an array

  // return Promise.resolve(users) // Returns a promises
  return db.query("SELECT * FROM users;") // Returns a promise
};


// const allUsersArr = getAllUsers()

getAllusers()
  .then(users => ...)
```
