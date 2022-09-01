const password = document.querySelector('#password');
const password1 = document.querySelector('#password1');
const message = document.querySelector('#message')
const button = document.querySelector('#button');


function dosumbit(){
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
        return true
    }
}