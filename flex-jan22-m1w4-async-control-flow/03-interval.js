console.log("🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔");

const intervalId = setInterval(() => {
  console.log("🐔🐔🐔🐔🐔🐔");
}, 1000);

const timeoutId = setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

if (Math.random() > 0.5) {
  clearTimeout(timeoutId);
}
