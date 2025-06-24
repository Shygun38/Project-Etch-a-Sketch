let grid = document.querySelector("#grid");
grid.style["background-color"] = "black";
grid.style["width"] = "640px";
grid.style["height"] = "640px";
let square;
let gridArray = [];
let gridSide = 0;

// Default 16x16 grid

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
};

// New grid via prompt

let button = document.querySelector("button");
button.addEventListener("click", () => {
    gridSide = prompt("Enter number of squares per side of new grid");
    while ((gridSide > 100) || (gridSide % gridSide !== 0)) {
        gridSide = prompt("Enter number of squares per side of new grid");
    };
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    };
    gridArray = [];
    for (let i = 0; i < (gridSide ** 2); i++) {
        square = document.createElement("div");
        grid.appendChild(square);
        square.style["background-color"] = "black";
        square.style["width"] = `${640 / gridSide}px`;
        square.style["height"] = `${640 / gridSide}px`;
        gridArray.push(square);
        gridArray[i].addEventListener("mouseenter", () => {
            gridArray[i].style["background-color"] = "pink";
        });
        gridArray[i].addEventListener("mouseleave", () => {
            gridArray[i].style["background-color"] = "black";
        });
    }
});