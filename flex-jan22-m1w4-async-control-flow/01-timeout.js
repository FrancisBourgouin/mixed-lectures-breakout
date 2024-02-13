console.log("Hello!");

// setTimeout(() => {
//   console.log("How are you ?");
//   setTimeout(() => {
//     console.log("How about your pet ?");
//   }, 2 * 1000);
// }, 2 * 1000);

// setTimeout(() => {
//   console.log("How are you ?");
// }, 2 * 1000);

// setTimeout(() => {
//   console.log("How about your pet ?");
// }, 4 * 1000);

const messages = ["Byyyye.", "Sayonara", "Laterz"];

for (let i = 0; i < messages.length; i++) {
  setTimeout(() => {
    console.log(messages[i]);
  }, (i + 1) * 1000);
}

messages.forEach((message, index) => {
  return setTimeout(() => console.log(message), (index + 1) * 1000);
});

// console.log("Have a nice day!");

// Hello, How are you?, Have a nice day? BAD !
// Hello, Have a nice day!, How are you? GOOD !

// Synchronous, runs first

// setTimeout synchronous!
// Payload of setTimeout is asynchronous
