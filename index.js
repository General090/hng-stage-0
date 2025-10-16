const timeElement = document.getElementById("user-time");

timeElement.textContent = Date.now();

setInterval(() => {
  timeElement.textContent = Date.now();
}, 1000);
