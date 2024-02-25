let modalIsOpen = false;
const gameItems = document.querySelectorAll('.game__item');
const gameModal = document.querySelector('.game__modal');
const gameContainer = document.querySelector('.game__container');
const gameList = document.querySelector('.game__list');

gameItems.forEach(item => {
    item.addEventListener('click', function () {
        const viewportWidth = window.innerWidth;
        const box = item.children[1];
        item.style.scale = '1.1';

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
                if (item.classList[1] === 'open') {
                    const boxIsOpen = document.querySelector('.boxOpen');
                    if (!boxIsOpen) {
                    gameContainer.insertAdjacentHTML('beforeend', `<h2 class='boxOpen'>THIS BOX IS OPEN...</h2>`);
                    const boxIsOpen = document.querySelector('.boxOpen');
                        setTimeout(() => {
                            boxIsOpen.remove();
                        }, 1000);
                    }
                     return;
                    }
                window.location.href = "./winner.html";
            } else {
                openModal();
                item.classList.add('open');
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
