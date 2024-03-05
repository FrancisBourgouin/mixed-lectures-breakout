createThief = (thieves, thiefInfo) => {
  const { email, name, password, imagePath } = thiefInfo;
  // Return thief object, or an error string
  if (!email || !name || !password || !imagePath) {
    return { error: "Missing fields", thief: null };
  }

  if (thieves[email]) {
    return { error: "Thief already exists", thief: null };
  }

  const newThief = {
    id: Object.keys(thieves).length + 1,
    email,
    name,
    password,
    imagePath,
  };

  thieves[newThief.email] = newThief;

  return { error: null, thief: newThief };
};

authenticateThief = (thieves, email, password) => {
  // Return thief object, or an error string
  const thief = thieves[email];

  if (!thief) {
    return { error: "thief doesn't exist", thief: null };
  }

  if (thief.password !== password) {
    return { error: "password is invalid", thief: null };
  }

  return { error: null, thief: thief };
};

fetchThiefInfo = (thieves, email) => {
  // Return thief object, or an error string

  const thief = thieves[email];

  if (!thief) {
    return { error: "thief doesn't exist", thief: null };
  }

  return { error: null, thief: thief };
};

module.exports = { createThief, authenticateThief, fetchThiefInfo };
