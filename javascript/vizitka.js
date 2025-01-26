document.addEventListener('DOMContentLoaded', function () {
    const innerFace = document.querySelector('.innerFace');
    innerFace.addEventListener('click', function () {
        swal({
            title: "Credits:",
            text: "\nJan Poljšak, 4. Ra \nProject made from HTML, CSS, and JavaScript\nTeacher: Boštjan Vouk",
            icon: "info",

        }).then(() => {
            // Re-enable scrolling after the alert is closed
            document.body.style.overflow = '';
        });

        // Disable scrolling when the alert is displayed
        document.body.style.overflow = 'hidden';
    });
});