let name = "Robert";
let otherName = name;

name = "John";

console.log(name, otherName);

// Robert, Robert
// John, Robert,
// John, John
// Something else

const user = { name: "Robert" };
const otherUser = user;

user.name = "John";

console.log(user, otherUser);

// Robert, Robert
// John, Robert,
// John, John
// Something else
