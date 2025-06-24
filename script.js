let grid = document.querySelector("#grid");
grid.style["background-color"] = "black";
let square;
let gridArray = [];

for (let i = 0; i < 256; i++) {
    square = document.createElement("div");
    grid.appendChild(square);
    square.style["background-color"] = "black";
    square.style["width"] = "40px";
    square.style["height"] = "40px";
    gridArray.push(square);
    gridArray[i].addEventListener("mouseenter", () => {
        gridArray[i].style["background-color"] = "pink";
    });
    gridArray[i].addEventListener("mouseleave", () => {
        gridArray[i].style["background-color"] = "black";
    });
}

