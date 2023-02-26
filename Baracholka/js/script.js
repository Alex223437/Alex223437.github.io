document.addEventListener('DOMContentLoaded', function() {
    const openModalButtons = document.querySelectorAll('.open-modal');
    const overlay = document.querySelector('.overlay');
    let currentModal;

    openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.dataset.modal;
        const modal = document.querySelector(`.modal[data-modal="${modalId}"]`);

        if (currentModal) {
        currentModal.style.display = 'none';
        }

        overlay.style.display = 'block';
        modal.style.display = 'block';
        currentModal = modal;
    });
    });

    const modalCloseButtons = document.querySelectorAll('.modal__close');
    modalCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        overlay.style.display = 'none';
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => modal.style.display = 'none');
    });
    });

    overlay.addEventListener('click', event => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
        currentModal.style.display = 'none';
        currentModal = null;
    }
    });
});