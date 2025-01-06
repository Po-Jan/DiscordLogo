
const colorPicker = document.querySelector("input");
const colorOutput = document.querySelector("label");
const svg = document.querySelector("#custom-svg");
const reset = document.querySelector(".reset");
const bezierButton = document.querySelector("#bezier");
const svgButton = document.querySelector("#SVG");
const pngButton = document.querySelector("#PNG");
const downloadButton = document.querySelector("#download");



addEventListener("input", (event) => {
    colorOutput.innerText = colorPicker.value;
    navigator.clipboard.writeText(colorPicker.value);
    if (svg) {
        svg.setAttribute("fill", colorPicker.value);
    }
});
reset.addEventListener("click", (event) => {
    svg.setAttribute("fill", "#5865F2");
    colorOutput.innerText="#5865F2";
    colorPicker.value = "#5865F2";
});

bezierButton.addEventListener("click", (event) => {
    svg.setAttribute("fill", "#5865F2");
    colorOutput.innerText="#5865F2";
    colorPicker.value = "#5865F2";
});
svgButton.addEventListener("click", (event) => {
    colorOutput.innerText = colorPicker.value
});
pngButton.addEventListener("click", (event) => {
    svg.setAttribute("fill", "#5865F2");
    colorOutput.innerText="#5865F2";
    colorPicker.value = "#5865F2";
});
downloadButton.addEventListener("click", (event) => {
    
});
