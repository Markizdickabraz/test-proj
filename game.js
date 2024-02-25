let modalIsOpen = false;

const gameItems = document.querySelectorAll('.game__item');
const gameModal = document.querySelector('.game__modal')

gameItems.forEach(item => {
    item.addEventListener('click', function () {
        const viewportWidth = window.innerWidth;
        
        const box = item.children[1];
        
        box.style.transition = 'top 0.5s ease';
        
        let newTop;
        if (viewportWidth >= 768 && viewportWidth <= 899) {
            newTop = '-45px';
        } else if (viewportWidth >= 900) {
            newTop = '-55px';
        } else {
            newTop = '-25px';
        }
        
        setTimeout(() => {
            box.style.top = newTop;
        }, 0);
        
        setTimeout(() => {
            if (modalIsOpen) {
                window.location.href = "./winner.html";
            } else {
                openModal();
                modalIsOpen = true;
            }
        }, 600);
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
