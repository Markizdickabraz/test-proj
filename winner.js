window.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.winner__img');
    console.log(image)

    function changeImageSrc() {
        const viewportWidth = window.innerWidth;
        if (viewportWidth >= 900) {
            image.src = './img/winner_img-desktop.png'; 
        } else {
            image.src = './img/winner_img-mobile.png'; 
        }
    }

    window.addEventListener('load', changeImageSrc);
    window.addEventListener('resize', changeImageSrc);
});