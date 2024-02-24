let modalIsOpen = false;

const gameItems = document.querySelectorAll('.game__item');
const gameModal = document.querySelector('.game__modal')

gameItems.forEach(item => {
    item.addEventListener('click', function () {
        const viewportWidth = window.innerWidth;
        
        if (modalIsOpen) {
            if (viewportWidth >= 768 && viewportWidth <= 899) {
                item.children[1].style = 'top: -45px;'
            } else if (viewportWidth >= 900) {
                item.children[1].style = 'top: -55px;'
            } else {
                item.children[1].style = 'top: -25px;'
            }
            window.location.href = "./winner.html";
        } else {
            if (viewportWidth >= 768 && viewportWidth <= 899) {
                item.children[1].style = 'top: -45px;'
            }
            else if (viewportWidth >= 900) {
                item.children[1].style = 'top: -55px;'
            }
            else {
                item.children[1].style = 'top: -25px;'
            }
            openModal();
            modalIsOpen = true;
        }
    });
});

const okButton = document.getElementById('close__modal');
okButton.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
    modalIsOpen = true;
});

function openModal() {
    gameModal.style.display = 'block';

}

function closeModal() {
    gameModal.style.display = 'none';
}
