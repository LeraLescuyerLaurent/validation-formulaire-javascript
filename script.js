const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('repassword');
// submit || change
form.addEventListener('change', (e) => {
    e.preventDefault();
    checkInputs();
});


function checkInputs(params) {
    //get the values from the inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim() 
    const passwordValue = password.value.trim() 
    const rePasswordValue = rePassword.value.trim()
    console.log(usernameValue,emailValue,passwordValue,rePasswordValue);


    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    }else{
        setSuccessFor(username)
    }
    if (emailValue === '') {
        setErrorFor(email, 'email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Your Email is not conforme !!")
    }else{
        setSuccessFor(email)
    }
    if (passwordValue === '') {
        setErrorFor(password, 'password cannot be blank');
    }else if (passwordValue.length < 8) {
          setErrorFor(password, "Minimum 8 caracteres")
    }else if (passwordValue.length > 20) {
          setErrorFor(password, "Maximum 20 caracteres")
    }else if (!isPasswordCorrect(passwordValue)) {
        setErrorFor(password, "1 majuscule,1 minuscule, 1 chiffre, 1 charactère spéciale")
    }else{
        setSuccessFor(password)
    }
    if (rePasswordValue === '') {
        setErrorFor(rePassword, 'Password Check cannot be blank');
    }else if (rePasswordValue !== passwordValue ) {
        setErrorFor(rePassword, 'Check Password n\'est pas identique au password');
    }else{
        setSuccessFor(rePassword)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    small.innerHTML = message;
    //ajout de la class
    formControl.className = 'form-control erreur'
}
function setSuccessFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    small.innerHTML = '';
    //ajout de la class
    formControl.className = 'form-control success'
}

/**
* @Description return si l 'email est conforme par rapport a un regex qui tes l'email le regex est pris du site du w3c 
*                        https://www.w3resource.com/javascript/form/email-validation-REC-2822.js 
*/
function isEmail(email) {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
function isPasswordCorrect(password){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/.test(password)
}
