const input = document.querySelector('input');
const warn = document.getElementById('warning');
const div = document.querySelector('.div');
document.querySelector('.form').addEventListener('submit', () => {
    console.log(input.value);
    if (input.value === "") {
        div.classList.add('false');
        warn.innerHTML = "email cannot be empty";
    } else if (!validateinput(input.value)) {
        div.classList.add('false');
        warn.innerHTML = "please provide a valid email";
    }
    else {
        div.classList.remove('false');
    }
    input.value = '';
})
function validateinput(email) {
    var actual = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return actual.test(String(email).toLowerCase());
}