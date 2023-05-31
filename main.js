const containerEl = document.getElementById('container');
const leftEl = document.getElementById('left');
const rightEl = document.getElementById('right');

const userEmailEl = document.getElementById('user-email');
const invalidEmailEl = document.getElementById('invalid-email');
const emailInput = document.getElementById('email');
const submitBtnEl = document.getElementById('submit-btn');

const confirmedMessageEl = document.getElementById('confirmed-message');
const dismissMessageEl = document.getElementById('dismiss-message');

function formSuccess() {
    confirmedMessageEl.classList.add('active');
    containerEl.classList.add('success');
    leftEl.style.display = 'none';
    rightEl.style.display = 'none';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

submitBtnEl.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value;

    if (validateEmail(email)) {
        formSuccess();
        userEmailEl.innerText = email
        emailInput.value = ''

        invalidEmailEl.classList.remove('active')
        emailInput.classList.remove('active')
    }else {
        invalidEmailEl.classList.add('active')
        emailInput.classList.add('active')
    }
});

dismissMessageEl.addEventListener('click', () => {
    leftEl.style.display = 'block';
    rightEl.style.display = 'block';
    containerEl.classList.remove('success');
    confirmedMessageEl.classList.remove('active');
})