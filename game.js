let modalIsOpen = false;

const gameItems = document.querySelectorAll('.game__item');
const gameModal = document.querySelector('.game__modal')

gameItems.forEach(item => {
    item.addEventListener('click', function () {
        if (modalIsOpen) {
            item.children[1].style = 'top: -25px;'
            window.location.href = "./winner.html";
        } else {
            item.children[1].style = 'top: -25px;'
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
