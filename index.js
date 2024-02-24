const modalBtn = document.querySelector('.btn__container');
const main = document.querySelector('.main');
const modalContent = document.querySelector('.modal__content');
const header = document.querySelector('.header');


// var closeModalBtn = document.getElementById('closeModalBtn');
var modal = document.getElementById('modal');

function openModal() {
    modal.style.display = 'block';
    main.innerHTML = '';
    setTimeout(() => {
        header.innerHTML = '';
        modalContent.innerHTML = '';

        const newTextModal = ` 
            <img class= 'modal__img' src="./img/box-close.png" alt="box close img">
            <h2 class="newText__title">Herzlichen Glückwunsch,
                Sie haben erfolgreich überprüft,
                dass Sie eine echte Person sind.</h2>
            <div class='modal__text--container'>
                <p class="modal__text">Hoje, 13 de junho, tem a oportunidade de obter uma mala Samsonite.</p>
                <p class="modal__text">Tudo o que precisa é de escolher a caixa de oferta certa.</p>
                <p class="modal__text">Tens 3 tentativas, boa sorte!</p>
            </div>
            <div class='game__link'><a href="./game.html">OK</a></div>
        `;
        
        modalContent.innerHTML = newTextModal;
    }, 2000);
}


function closeModal() {
  modal.style.display = 'none';
}

modalBtn.addEventListener('click', openModal);

