const mainCard = document.querySelector('.main-card');
const popupCard = document.querySelector('.popup-card');
const btnSecondary = document.querySelector('.btn-secondary');
const btnPrimary = document.querySelectorAll('.btn-primary');
const rates = document.querySelectorAll('.btn-primary');
const rating = document.getElementById('rating');
const rateAgain = document.querySelector('.rate-again');



btnSecondary.addEventListener('click', () => {
    popupCard.classList.remove('hidden');
    mainCard.style.display = 'none';
});

rateAgain.addEventListener('click', () => {
    popupCard.classList.add('hidden');
    mainCard.style.display = 'block';
});


rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
    });

});