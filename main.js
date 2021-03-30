const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit');

let completed = false;

burger.addEventListener('click', function () {
    menu.classList.toggle('show-menu')
    burger.classList.toggle('show-menu')

})
submit.addEventListener('click', (e) => {
    e.preventDefault();
    checkInput();
    checkCompletion();

})

function checkInput() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if (nameValue === '') {
        error(name);
    } else {
        success(name);
    }

    if (emailValue === '') {
        error(email);
    } else {
        success(email);
    }

    if (passwordValue === '') {
        error(password);
    } else {
        success(password);
    }
    if (passwordValue !== password2Value || password2Value === "") {
        error(password2);
    } else {
        success(password2);
    }
}

function success(inputSelection) {
    const formControl = inputSelection.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');

    const small = formControl.querySelector('small');
    small.innerHTML = 'Success';
    // console.log('success', formControl)
    completed = true;
}

function error(inputSelection) {
    const formControl = inputSelection.parentElement;

    formControl.classList.remove('success');
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.innerHTML = 'Can not be blank';
    // console.log('error', formControl);
    completed = false;
}

function checkCompletion() {
    // completed ? console.log('completed') : console.log('there is an error')
    if (completed === true) {

        setTimeout(() => {

            location.reload(true);
        }, 300);
    } else {
        return;
    }
}