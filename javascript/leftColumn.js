document.addEventListener('DOMContentLoaded', function () {

    const SVG = document.getElementById('SVG');
    const Bezier = document.getElementById('bezier');
    const PNG = document.getElementById('PNG');
    const Download = document.getElementById('download');

    const page1 = document.getElementById('pageMain');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');

    SVG.addEventListener('click', function () {
        page1.classList.add('displayFlex');
        page2.classList.remove('displayFlex');
        page3.classList.remove('displayFlex');
        page4.classList.remove('displayFlex');
    });

    Bezier.addEventListener('click', function () {
        page1.classList.remove('displayFlex');
        page2.classList.add('displayFlex');
        page3.classList.remove('displayFlex');
        page4.classList.remove('displayFlex');
    });

   

    PNG.addEventListener('click', function () {

        page1.classList.remove('displayFlex');
        page2.classList.remove('displayFlex');
        page3.classList.add('displayFlex');
        page4.classList.remove('displayFlex');
    });

    Download.addEventListener('click', function () {
        page1.classList.remove('displayFlex');
        page2.classList.remove('displayFlex');
        page3.classList.remove('displayFlex');
        page4.classList.add('displayFlex');
    });
});