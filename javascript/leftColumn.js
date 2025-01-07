document.addEventListener('DOMContentLoaded', function () {

    const SVG = document.getElementById('gumbSvg');
    const Bezier = document.getElementById('gumbCanvas');
    const PNG = document.getElementById('gumbPng');
    const Download = document.getElementById('gombDownload');

    const divSvg = document.getElementById('divSvg');
    const divCanvas = document.getElementById('divCanvas');
    const divPng = document.getElementById('divPng');
    const divDownload = document.getElementById('divDownload');

    SVG.addEventListener('click', (event) => {
        divSvg.classList.add('displayFlex');
        divCanvas.classList.remove('displayFlex');
        divPng.classList.remove('displayFlex');
        divDownload.classList.remove('displayFlex');
    });

    Bezier.addEventListener('click', (event) => {
        divSvg.classList.remove('displayFlex');
        divCanvas.classList.add('displayFlex');
        divPng.classList.remove('displayFlex');
        divDownload.classList.remove('displayFlex');
    });

    PNG.addEventListener('click', (event) => {

        divSvg.classList.remove('displayFlex');
        divCanvas.classList.remove('displayFlex');
        divPng.classList.add('displayFlex');
        divDownload.classList.remove('displayFlex');
    });

    Download.addEventListener('click', (event) => {
        divSvg.classList.remove('displayFlex');
        divCanvas.classList.remove('displayFlex');
        divPng.classList.remove('displayFlex');
        divDownload.classList.add('displayFlex');
    });
});