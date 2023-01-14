let counter = document.getElementById("counter");
let history = document.getElementById("history");
let count = 0;


function increment() {
    count += 1;
    counter.textContent = count;
}

function reset() {
    counter.textContent = 0;
    history.textContent += count + " - ";
    count = 0;
}