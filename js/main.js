

var passworField = document.querySelector('.password input');
var customPassworField = document.querySelector('.confirm-password input');
var passworFieldIcon = document.querySelector('.field-icon1');
var customPassworFieldIcon = document.querySelector('.field-icon2');

passworFieldIcon.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = passworField.getAttribute('type') === 'password' ? 'text' : 'password';
    passworField.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

customPassworFieldIcon.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = customPassworField.getAttribute('type') === 'password' ? 'text' : 'password';
    customPassworField.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});