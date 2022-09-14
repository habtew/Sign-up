const password = document.querySelector('#password');
const password1 = document.querySelector('#password1');
const message = document.querySelector('#message')
const success = document.querySelector('#success')
const button = document.querySelector('#button');


function dosumbit(event){
    event.preventDefault()
    if(password.value === '' && password1.value === ''){
        message.innerText = ''
        return false
    }
    else if(password.value !== '' && password1.value === ''){
        message.innerText = 'confirm password'
        return false;
    }
    else if(password.value !== password1.value){
        message.innerText = 'password does not match'
        return false;
    }
    else{
        success.classList.add('success')
        success.textContent = "successfully signed"
        document.querySelector('form').reset()
        return true
    }
}
button.addEventListener('click', dosumbit)