document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const relation = card.getAttribute('data-relation');
        alert(`You selected gift ideas for ${relation}!`);
    });
});
const recoveryForm = document.querySelector('.recovery-form');

recoveryForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = recoveryForm.querySelector('input[type="email"]');
    const emailValue = emailInput.value.trim();

    if (validateEmail(emailValue)) {
        
        alert(`A recovery email has been sent to ${emailValue}. Please check your inbox.`);
        
        recoveryForm.reset();
    } else {
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}