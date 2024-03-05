# Thieve's Den!

Login, then see the content of the vault, unique per user.

## Data

## Thief

id, unique identifier (email), password, name, imagePath

```js
const thief = {
  id: 1,
  email: "",
  name: "",
  password: "",
  imagePath: "",
};
```

## ThiefList

```js
const thievesArr = [thief, thief];
const thievesObj = { email: thief, email: thief };
```

## Seed

```jsx
const thief1 = {
  id: 1,
  email: "gentleman@cambrioleur.com",
  name: "Arsène Lupin",
  password: "paris",
  imagePath: "arsene.gif",
};

const thief2 = {
  id: 2,
  email: "pontiac@bandit.com",
  name: "Doug Judy",
  password: "rosa",
  imagePath: "doug.webp",
};

const thieves = {
  "gentleman@cambrioleur.com": thief1,
  "pontiac@bandit.com": thief2,
};
```

## Structure

### Helpers!

createThief = () => {...}

authenticateThief = () => {...}

fetchThiefInfo = () => {...}

### HTML

GET /urls
GET /urls/new => Authenticated users
GET /urls/:urls_id => Authenticated users
GET /login
GET /register

POST /logout
POST /login
POST /register
POST /urls => Authenticated users
POST /urls/:url_id => Authenticated users
POST /urls/:url_id/edit => Authenticated users
POST /urls/:url_id/delete => Authenticated users
