// legos
// normal
// duplo
// technic

const legoSets = {
  normal: {
    111: {
      name: "Police Station",
      pieces: 300,
    },
    222: {
      name: "Space Station",
      pieces: 1000,
    },
  },
  duplo: {
    "001": {
      name: "Big bunny",
      pieces: 10,
    },
    "002": {
      name: "Small bunny",
      pieces: 5,
    },
  },
  technic: {
    ABC: {
      name: "Motorcycle",
      pieces: 3000,
    },
  },
};

legoSets.duplo["001"].pieces;

const duploSets = legoSets.duplo;

duploSets["002"];

const technicSets = legoSets.technic;

technicSets["ECD"] = {
  name: "Plant",
  pieces: 500,
};
