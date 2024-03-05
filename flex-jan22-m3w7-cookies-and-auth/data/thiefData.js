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

module.exports = { thief1, thief2, thieves };
