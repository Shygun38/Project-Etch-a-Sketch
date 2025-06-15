let grid = document.querySelector("#grid");
grid.style["background-color"] = "black";
let square;

for (let i = 0; i < 256; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    square.style["background-color"] = "rgba(0, 0, 0, 0)";  // Transparent color
    grid.appendChild(square);
    square.addEventListener("mouseenter", function(e) {
        square.style["background-color"] = "pink";
    });
    square.addEventListener("mouseleave", function(e) {
        square.style["background-color"] = "rgba(0, 0, 0, 0)";
    });
}