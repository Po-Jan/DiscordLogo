document.addEventListener('DOMContentLoaded', function () {

    const Bezier = document.getElementById('bezier');
    const PNG = document.getElementById('PNG');
    const SVG = document.getElementById('SVG');
    const Vizitka = document.getElementById('download');

    const page1 = document.getElementById('pageMain');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');

    Bezier.addEventListener('click', function () {
        Bezier.classList.add('active');  // pobarva gumb v modro
        SVG.classList.remove('active');
        PNG.classList.remove('active');
        Vizitka.classList.remove('active');

        page1.classList.add('displayFlex');
        page2.classList.remove('displayFlex');
        page3.classList.remove('displayFlex');
        page4.classList.remove('displayFlex');
    });

    SVG.addEventListener('click', function () {
        Bezier.classList.remove('active');
        SVG.classList.add('active');
        PNG.classList.remove('active');
        Vizitka.classList.remove('active');

        page1.classList.remove('displayFlex');
        page2.classList.add('displayFlex');
        page3.classList.remove('displayFlex');
        page4.classList.remove('displayFlex');
    });

    PNG.addEventListener('click', function () {
        Bezier.classList.remove('active');
        SVG.classList.remove('active');
        PNG.classList.add('active');
        Vizitka.classList.remove('active');

        page1.classList.remove('displayFlex');
        page2.classList.remove('displayFlex');
        page3.classList.add('displayFlex');
        page4.classList.remove('displayFlex');
    });

    Vizitka.addEventListener('click', function () {
        Bezier.classList.remove('active');
        SVG.classList.remove('active');
        PNG.classList.remove('active');
        Vizitka.classList.add('active');

        page1.classList.remove('displayFlex');
        page2.classList.remove('displayFlex');
        page3.classList.remove('displayFlex');
        page4.classList.add('displayFlex');
    });
});